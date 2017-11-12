import * as types from './action-types'

export function addTooltip(tip, position) {
  return {
    type: types.UPDATE_TOOLTIP,
    payload: {
      tip,
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
