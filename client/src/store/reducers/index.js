import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import FavoriteReducer from './FavoriteReducer'

const reducer = combineReducers({
  UserReducer,
  FavoriteReducer
})

export default reducer