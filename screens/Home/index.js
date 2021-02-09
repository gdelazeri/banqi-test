import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { PageLoader } from '../../components';
import { Wrapper } from './styles';
import { fetchAccountData } from '../../store/ducks/bankAccount';

const Home = () => {
  const {
    accountData,
    loading,
    error,
  } = useSelector((state) => state?.BankAccountReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchAccountData());
  }, []);

  if (loading) {
    return (
      <PageLoader />
    );
  }

  return (
    <Wrapper>

    </Wrapper>
  );
};

export default Home;
