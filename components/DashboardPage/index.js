import React from 'react';

import { Wrapper, WelcomeText } from './styles';
import Balance from '../../components/Balance';
import ActionsBar from '../../components/ActionsBar';
import PromotionalCard from '../../components/PromotionalCard';
import useLanguage from '../../language/useLanguage';
import IconMoney from '../../assets/icons/money';
import TransactionsList from '../TransactionsList';

const DashboardPage = ({ accountData }) => {
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
    <TransactionsList
      transactions={accountData.transactions}
    />
  </Wrapper>;
}

export default DashboardPage;
