import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  WrapperHeader,
  WrapperContent,
  Amount,
  Description,
  Date,
  BtnClose,
} from './styles';
import IconClose from '../../assets/icons/close';
import formatAmount from '../../utils/formatAmount';
import formatDate from '../../utils/formatDate';
import formatTime from '../../utils/formatTime';
import useLanguage from '../../language/useLanguage';

const TransactionPage = ({ transaction }) => {
  const navigation = useNavigation();
  const { TransactionPage: TransactionPageStrings } = useLanguage();

  const amount = Number(transaction.amount);
  return <Wrapper>
    <WrapperHeader receive={amount > 0}>
      <Amount>
        {formatAmount(amount)}
      </Amount>
      <BtnClose onPress={() => navigation.goBack()}>
        <IconClose />
      </BtnClose>
    </WrapperHeader>
    <WrapperContent>
      <Description>
        {transaction.description}
      </Description>
      <Date>
        {TransactionPageStrings.datetime
          .replace('{{date}}', formatDate(transaction.date))
          .replace('{{time}}', formatTime(transaction.date))
        }
      </Date>
    </WrapperContent>
  </Wrapper>
}

export default TransactionPage;
