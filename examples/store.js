import {createStore} from 'redux'
import rootReducer from './reducer'

function configureStore() {
  const store = createStore(rootReducer)

  return store
}

export default configureStore()
