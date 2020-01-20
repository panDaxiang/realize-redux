import React, { Component } from 'react'
import styled from 'styled-components'

import store from '@/store'
import { bindActionCreator } from '@/redux'
import actions from '@/store/actions'

const s = bindActionCreator(actions, store.dispatch)

const Btn = styled.button`
  display: inline-block;
  margin-left: 20px;
  padding:5px 20px 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().counter.number
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    const { number } = this.state
    return (
      <div>
        {number}
        <Btn onClick={s.increment}>+</Btn>
        <Btn onClick={s.decrement}>-</Btn>
      </div>
    )
  }
}

export default Counter
