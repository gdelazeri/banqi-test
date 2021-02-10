import 'jest-styled-components'
// do not forget the /native at the end of the line.
import { ThemeProvider } from 'styled-components/native'
import React from 'react'
import renderer from 'react-test-renderer'

import theme from '../assets/theme';
import Balance from '../components/Balance';

describe('Balance snapshot', () => {
  test('it should render a Balance with 500', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Balance amount={500} />
        </ThemeProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

