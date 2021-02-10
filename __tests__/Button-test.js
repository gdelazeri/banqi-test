import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import Button from '../components/Button';

test('Button default', () => {
  const wrapper = mount(<Button
    label={'Press here'}
    onPress={() => alert('Pressed')}
    disabled={false}
    loading={false}
  />)
  expect(wrapper).toMatchSnapshot()
})

test('Button disabled', () => {
  const wrapper = mount(<Button
    label={'Press here'}
    onPress={() => alert('Pressed')}
    disabled={true}
    loading={false}
  />)
  expect(wrapper).toMatchSnapshot()
})

test('Button loading', () => {
  const wrapper = mount(<Button
    label={'Press here'}
    onPress={() => alert('Pressed')}
    disabled={false}
    loading={true}
  />)
  expect(wrapper).toMatchSnapshot()
})
