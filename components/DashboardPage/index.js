import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Wrapper, WelcomeText } from './styles';
import {
  Balance,
  ActionsBar,
  PromotionalCard,
} from '../../components';
import useLanguage from '../../language/useLanguage';
import IconMoney from '../../assets/icons/money';

const DashboardPage = ({ accountData }) => {
  const navigation = useNavigation();
  const { DashboardPage: DashboardPageStrings } = useLanguage();

  return <Wrapper>
    <WelcomeText>{DashboardPageStrings.welcomeText.replace('{{name}}', accountData.name)}</WelcomeText>
    <Balance amount={accountData.balance} />
    <ActionsBar />
    <PromotionalCard
      icon={IconMoney}
      title={DashboardPageStrings.promotionalTitle}
      subtitle={DashboardPageStrings.promotionalSubtitle}
    />
  </Wrapper>;
}

export default DashboardPage;
