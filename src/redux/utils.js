import {combineReducers} from 'redux'
import hotTipReducer from './reducer'

export default function addHotTipToStore(store) {
  return combineReducers(
    hotTipReducer,
    ...store
  )
}
