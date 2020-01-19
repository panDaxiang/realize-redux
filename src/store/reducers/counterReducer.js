import { INCREMENT, DECREMENT} from '../action-types'

let initState = {
  number: 0,
}

export default function(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  }
}
