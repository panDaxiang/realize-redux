import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Provider } from '@/react-redux'

import store from '@/store'
import Counter from '@/components/Counter'
import Todos from '@/components/Todos'

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
`

ReactDOM.render(
  <Provider store={store}>
    <Wrapper>
      <h3>实现redux</h3>
      <hr />
      <Counter />
      <Todos />
    </Wrapper>
  </Provider>,
  document.getElementById('root'),
)
