export default function bindActionsCreator(actions, dispatch) {
  return Object.keys(actions).reduce((newActions, key) => {
    newActions[key] = function() {
      dispatch(actions[key].apply(this, arguments))
    }
    return newActions
  }, {})
}
