import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Wrapper, Label } from './styles';

const Button = ({ label, onPress, loading, disabled, loadingColor = '#fff' }) => {
  const onButtonPress = () => {
    if (onPress && !loading && !disabled) {
      onPress();
    }
  };

  return (
    <Wrapper
      onPress={onButtonPress}
      disabled={disabled}
    >
      {loading ? <ActivityIndicator color={loadingColor} /> : <Label>{label}</Label>}
    </Wrapper>
  );
};

export default Button;
