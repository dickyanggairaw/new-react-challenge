const initialState = {
  favorites: []
}

function reducer(state = initialState, action) {
  const {type, payload} = action
  if (type === 'favorite/addFavorite') {
    return {...state, favorites: state.favorites.concat(payload)}
  }
  return state
}

export default reducer