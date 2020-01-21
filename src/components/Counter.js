import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from '@/react-redux'

import actions from '@/store/actions'
import { bindActionCreator } from '@/redux'

const Btn = styled.button`
  display: inline-block;
  margin-left: 20px;
  padding: 5px 20px 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
@connect(
  state => state.counter,
  dispatch => bindActionCreator(actions, dispatch),
)
class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { increment, decrement, number } = this.props
    return (
      <div>
        {number}
        <Btn onClick={increment}>+</Btn>
        <Btn onClick={decrement}>-</Btn>
      </div>
    )
  }
}

export default Counter
