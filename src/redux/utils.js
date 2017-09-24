import {combineReducers} from 'redux'
import hotTip from './reducer'

export default function addHotTipToStore(store) {
  return combineReducers(
    hotTip,
    ...store
  )
}
