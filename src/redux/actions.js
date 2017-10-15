import * as types from './action-types'

export function addTooltip(text, position) {
  return {
    type: types.UPDATE_TOOLTIP,
    payload: {
      text,
      visible: true,
      position: Object.assign({}, position)
    }
  }
}

export function clearTooltip() {
  return {
    type: types.UPDATE_TOOLTIP,
    payload: {
      visible: false
    }
  }
}
