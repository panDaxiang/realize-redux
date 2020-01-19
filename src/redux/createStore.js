export default function createStore(reducer, preloadedState, enhancer) {
  if (enhancer && typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, preloadedState)
  }

  let state = preloadedState
  let listeners = []

  function getState() {
    return JSON.parse(JSON.stringify(state))
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  dispatch({ type: '@@redux/INIT' })

  function subscribe(listener) {
    listeners.push(listener)
    return function() {
      listeners = listeners.filter(item !== listener)
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}
