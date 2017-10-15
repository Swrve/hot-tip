import * as types from './action-types'

export function hotTipReducer(state = {}, {type, payload}) {
  switch (type) {
  case types.UPDATE_TOOLTIP:
    return Object.assign({}, state, {
      text: payload.text,
      visible: payload.visible
    }, payload.position)
  default:
    return state
  }
}

export default hotTipReducer
