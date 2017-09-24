import * as types from './action-types'

export function addTooltip(text, position) {
  return {
    type: types.UPDATE_TOOLTIP,
    text,
    visible: true,
    position
  }
}

export function clearTooltip() {
  return {
    type: types.UPDATE_TOOLTIP,
    visible: false
  }
}
