import * as types from './action-types'

export function hotTipReducer(state = {}, action) {
  switch (action.type) {
  case types.UPDATE_TOOLTIP:
    return Object.assign({}, state, {
      text: action.text,
      visible: action.visible
    }, action.position)
  default:
    return state
  }
}

export default hotTipReducer
