import React, { useState, useMemo, useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

import {
  Wrapper,
  WrapperHeader,
  WrapperTitle,
  Title,
  Subtitle,
  BtnShowMore,
  LabelShowMore,
  Divider,
} from './styles';
import useLanguage from '../../language/useLanguage';
import IconReceipt from '../../assets/icons/receipt';
import TransactionItem from '../../components/TransactionItem';

const LIST_SIZE = 3;

const TransactionsList = ({ transactions = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const { TransactionsList: TransactionsListStrings } = useLanguage();
  const theme = useContext(ThemeContext);

  const renderTransactions = useMemo(() => {
    let list = transactions;
    if (!showAll) list = list.slice(0, LIST_SIZE);
    return (
      <>
        {list.map((transaction, index) => <View key={transaction._id}>
          {index > 0 && <Divider />}
          <TransactionItem
            description={transaction.description}
            date={transaction.date}
            amount={transaction.amount}
          />
        </View>)}

        {!showAll && transactions.length > list.length && <BtnShowMore onPress={() => setShowAll(true)}>
          <LabelShowMore>{TransactionsListStrings.showMore}</LabelShowMore>
        </BtnShowMore>}
      </>
    );
  }, [showAll, transactions]);

  if (!Array.isArray(transactions) || transactions.length === 0)
    return <></>

  return <Wrapper>
    <WrapperHeader>
      <IconReceipt size={22} color={theme.colors.secondary} />
      <WrapperTitle>
        <Title>{TransactionsListStrings.title}</Title>
        <Subtitle>{TransactionsListStrings.subtitle}</Subtitle>
      </WrapperTitle>
    </WrapperHeader>
    {renderTransactions}
  </Wrapper>
}

export default TransactionsList;