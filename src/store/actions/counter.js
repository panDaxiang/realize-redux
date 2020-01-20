import { INCREMENT, DECREMENT } from '@/store/action-types'

export default {
  increment() {
    return {
      type: INCREMENT,
    }
  },
  decrement() {
    return {
      type: DECREMENT,
    }
  },
}
