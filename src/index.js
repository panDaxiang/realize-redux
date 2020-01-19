import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Counter from '@/components/Counter'
import Todos from '@/components/Todos'

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
`

ReactDOM.render(
  <Wrapper>
    <h1>实现redux</h1>
    <Counter />
    <Todos />
  </Wrapper>,
  document.getElementById('root'),
)
