import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import playerApp from '../reducers'

export default combineReducers({
  router,
  playerApp
})
