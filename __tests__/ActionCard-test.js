import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import ActionCard from '../components/ActionCard';
import IconCellphone from '../assets/icons/cellphone';
import IconDeposit from '../assets/icons/deposit';

test('ActionCard recharge', () => {
  const wrapper = mount(<ActionCard icon={IconCellphone} label={'Recarga'} />)
  expect(wrapper).toMatchSnapshot()
})

test('ActionCard deposit', () => {
  const wrapper = mount(<ActionCard icon={IconDeposit} label={'Depositar'} />)
  expect(wrapper).toMatchSnapshot()
})