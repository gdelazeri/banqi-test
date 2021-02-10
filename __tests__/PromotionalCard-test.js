import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import PromotionalCard from '../components/PromotionalCard';
import IconMoney from '../assets/icons/money';

test('PromotionalCard money', () => {
  const wrapper = mount(<PromotionalCard
    icon={IconMoney}
    title={'Empréstico rápido'}
    subtitle={'Até R$ 1000 pré-aprovados para você'}
  />)
  expect(wrapper).toMatchSnapshot()
})
