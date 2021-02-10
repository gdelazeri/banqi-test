import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  Wrapper,
  Card,
  CardText,
  Title,
  Subtitle,
} from './styles';

const PromotionalCard = ({ icon, title, subtitle }) => {
  const theme = useContext(ThemeContext);

  return <Wrapper>
    <Card>
      {icon({ color: theme.colors.secondary })}
      <CardText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardText>
    </Card>
  </Wrapper>
}

export default PromotionalCard;