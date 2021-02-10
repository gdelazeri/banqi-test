import React from 'react';
import { View } from 'react-native';

import {
  Wrapper,
  ActionPadding,
} from './styles';
import ActionCard from '../ActionCard';
import actions from '../../assets/mocks/actionsData';

const ActionsBar = () => {
  if (!Array.isArray(actions) || actions.length === 0)
    return <></>

  return <Wrapper horizontal={true} showsHorizontalScrollIndicator={false}>
    <ActionPadding />
    {actions.map((action, index) => (
      <View key={`action${index}`}>
        <ActionCard icon={action.icon} label={action.label} />
      </View>
    ))}
    <ActionPadding />
  </Wrapper>
}

export default ActionsBar;