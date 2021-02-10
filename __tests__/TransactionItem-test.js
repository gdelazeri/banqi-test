import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import TransactionItem from '../components/TransactionItem';

test('TransactionItem Spotify', () => {
  const wrapper = mount(<TransactionItem
    transaction={{
      _id: "xy3e64ed-45154398-af02-9dff23128f4a",
      date: "2021-01-13T17:24:56-03:00",
      description: "Spotify",
      amount: "-20.89"
    }}
  />)
  expect(wrapper).toMatchSnapshot()
})

test('TransactionItem Deposit', () => {
  const wrapper = mount(<TransactionItem
    transaction={{
      _id: "xy3e64ed-45154398-af02-9dff23128f4a",
      date: "2021-01-15T17:24:56-03:00",
      description: "Deposit",
      amount: "350.00"
    }}
  />)
  expect(wrapper).toMatchSnapshot()
})
