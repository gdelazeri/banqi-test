import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  Wrapper,
  Label,
} from './styles';

const ActionCard = ({ icon, label }) => {
  const theme = useContext(ThemeContext);

  return <Wrapper>
    {icon({ color: theme.colors.primary })}
    <Label>{label}</Label>
  </Wrapper>
}

export default ActionCard;