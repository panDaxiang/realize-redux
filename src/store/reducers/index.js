import { combineReducers } from '@/redux'

import counter from './counterReducer'
import todos from './todosReducer'

export default combineReducers({
  counter,
  todos
})