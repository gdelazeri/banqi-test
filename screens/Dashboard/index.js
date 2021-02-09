import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Wrapper } from './styles';
import { DashboardPage, PageLoader } from '../../components';
import { fetchAccountData } from '../../store/ducks/bankAccount';

const Dashboard = () => {
  const {
    accountData,
    loading,
    error,
  } = useSelector((state) => state?.BankAccountReducer);
  const dispatch = useDispatch();

  const fetch = () => {
    dispatch(fetchAccountData());;
  }

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <PageLoader />
  }

  return (
    <Wrapper>
      <DashboardPage
        accountData={accountData}
      />
    </Wrapper>
  );
};

export default Dashboard;
