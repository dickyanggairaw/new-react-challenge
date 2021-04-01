export function fetchUser (payload) {
  return {type: 'users/setUsers', payload}
}
export function addFavoriteUser (payload) {
  return {type: 'favorite/addFavorite' , payload}
}
export function findUser (payload) {
  return {type: 'user/setUser', payload}
}

export function setLoading (payload) {
  return {type: 'loading/setLoading', payload}
}

export function setError (payload) {
  return {type: 'error/setError', payload}
}

export function fetchUserAsync () {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch('https://dummyapi.io/data/api/user', {
      method: 'GET',
      headers: {
        "app-id": '60617f6bc94f68d6a87e63b3'
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch(fetchUser(res.data))
      })
      .catch(err => dispatch(setError(err)))
      .finally(_ => dispatch(setLoading(false)))
  } 
}

// export function addFavoriteUserAsync (user) {
//   return (dispatch) => {
//     const favorites = useSelector(state => state.favorites)
//     let flag = false
//     favorites.forEach(dataFavorite => {
//       if(dataFavorite.firstName === user.firstName) {
//         flag = true
//       }
//     })
//     if(!flag) {
//       dispatch(addFavoriteUser(user))
//     }
//   }
// }

export function findUserAsync (id) {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch('https://dummyapi.io/data/api/user/' + id, {
        method: 'GET',
        headers: {
          "app-id": '60617f6bc94f68d6a87e63b3'
        }
      })
        .then(res => res.json())
        .then(data => {
          dispatch(findUser(data))
        })
        .catch(err => dispatch(setError(err)))
      .finally(_ => dispatch(setLoading(false)))
  }
}