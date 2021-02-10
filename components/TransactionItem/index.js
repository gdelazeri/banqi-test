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
import useLanguage from '../../language/useLanguage';
import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';

const TransactionItem = ({ description, date, amount }) => {
  const { Global } = useLanguage();
  const navigation = useNavigation();

  const formatAmount = (amount) => {
    const value = formatValue(Math.abs(Number(amount)));
    let text = Number(amount) < 0 ? `- ` : '';
    text += Global.currency + ' ';
    text += value;
    return text;
  }

  return <Wrapper>
    <WrapperContent>
      <View>
        <Description>{description}</Description>
        <Date>{formatDate(date)}</Date>
      </View>
      <Amount receive={Number(amount) > 0}>{formatAmount(amount)}</Amount>
    </WrapperContent>
  </Wrapper>
}

export default TransactionItem;