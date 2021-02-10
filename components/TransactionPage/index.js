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

const TransactionPage = ({ transaction }) => {
  const navigation = useNavigation();

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
        {formatDate(transaction.date, true)}
      </Date>
    </WrapperContent>
  </Wrapper>
}

export default TransactionPage;
