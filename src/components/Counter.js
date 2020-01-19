import React, { Component } from 'react'
import styled from 'styled-components'

import store from '@/store'
import { INCREMENT, DECREMENT} from '@/store/action-types'
console.log(INCREMENT)

const Btn = styled.button`
  display: inline-block;
  margin-left: 20px;
  padding:5px 20px 5px;
  border-radius: 5px;
  outline: none;
`

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  componentWillMount(){
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
        <Btn onClick={() => store.dispatch({type: INCREMENT})}>+</Btn>
        <Btn onClick={() => store.dispatch({type: DECREMENT})}>-</Btn>
      </div>
    )
  }
}

export default Counter
