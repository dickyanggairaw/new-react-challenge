import {createStore} from 'redux'
const initialState = {
  users: [],
  user: {},
  favorites: []
}

function reducer(state = initialState, action) {
  const {type, payload} = action
  if(type === 'users/setUsers') {
    return {...state, users: payload}
  }else
  if(type === 'user/setUser') {
    return {...state, user: payload}
  }else if (type === 'favorite/addFavorite') {
    return {...state, favorites: state.favorites.concat(payload)}
  }
  return state
}

const store = createStore(reducer)
console.log(store)
export default store