import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Wrapper, WelcomeText } from './styles';
import {
  Balance,
} from '../../components';
import useLanguage from '../../language/useLanguage';

const DashboardPage = ({ accountData }) => {
  const navigation = useNavigation();
  const { DashboardPage: DashboardPageStrings } = useLanguage();

  return <Wrapper>
    <WelcomeText>{DashboardPageStrings.welcomeText.replace('{{name}}', accountData.name)}</WelcomeText>
    <Balance amount={accountData.balance} />
  </Wrapper>;
}

export default DashboardPage;
