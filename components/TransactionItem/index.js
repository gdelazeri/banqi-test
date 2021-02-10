import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import {
  Wrapper,
  WrapperContent,
  Description,
  Date,
  Amount,
} from './styles';
import formatDate from '../../utils/formatDate';
import formatAmount from '../../utils/formatAmount';

const TransactionItem = ({ transaction }) => {
  const navigation = useNavigation();
  const amount = Number(transaction.amount);
  return <Wrapper onPress={() => navigation.navigate('Transaction', { transaction })}>
    <WrapperContent>
      <View>
        <Description>{transaction.description}</Description>
        <Date>{formatDate(transaction.date)}</Date>
      </View>
      <Amount receive={amount > 0}>{formatAmount(amount)}</Amount>
    </WrapperContent>
  </Wrapper>
}

export default TransactionItem;