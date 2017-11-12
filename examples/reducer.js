import {combineReducers} from 'redux'
import {hotTipReducer} from '../src'

const showSource = (state = '', action) => {
  switch(action.type){
  case('SHOWSRC'):
    return action.payload.id
  default:
    return state
  }
}

const rootReducer = combineReducers({
  // Add hotTip as a named reducer
  hotTipReducer,
  showSource
})

export default rootReducer
