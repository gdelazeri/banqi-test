import React from 'react';
import { ActivityIndicator } from 'react-native';
import { WrapperLoader } from './styles';

const PageLoader = () => (<WrapperLoader>
  <ActivityIndicator />
</WrapperLoader>)

export default PageLoader;
