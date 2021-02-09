import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Wrapper } from './styles';
import {
  Balance,
} from '../../components';

const DashboardPage = ({ accountData }) => {
  const navigation = useNavigation();
  
  return <Wrapper>
    <Balance amount={accountData.balance} />
  </Wrapper>;
}

export default DashboardPage;
