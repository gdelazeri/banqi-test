import React from 'react';

import { Wrapper } from './styles';
import {
  TransactionPage,
} from '../../components';

const Transaction = ({ route }) => {
  const { transaction } = route.params;
  return (
    <Wrapper>
      <TransactionPage
        transaction={transaction}
      />
    </Wrapper>
  );
};

export default Transaction;
