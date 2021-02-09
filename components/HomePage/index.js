import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Wrapper, Logo } from './styles';
import Button from '../Button';
import useLanguage from '../../language/useLanguage';

const HomePage = () => {
  const navigation = useNavigation();
  const { HomePage: HomePageStrings } = useLanguage();

  return <Wrapper>
    <Logo source={require('../../assets/icon.png')} style={{ resizeMode: 'cover' }} />
    <Button
      onPress={() => navigation.navigate('Dashboard')}
      label={HomePageStrings.button}
    />
  </Wrapper>;
}

export default HomePage;
