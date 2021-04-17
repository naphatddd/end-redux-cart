import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from 'modules/reducers'
import reduxThunk from 'redux-thunk'

function configureStore(initialState) {
  const middleware = [reduxThunk]
  const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  return store
}

export default configureStore
