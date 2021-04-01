const initialState = {
  users: [],
  user: {},
  loading: false,
  error: null
}

function reducer(state = initialState, action) {
  const {type, payload} = action
  if(type === 'users/setUsers') {
    return {...state, users: payload}
  }else
  if(type === 'user/setUser') {
    return {...state, user: payload}
  }else if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  }else if (type === 'error/setError') {
    return {...state, error: payload}
  }
  return state
}

export default reducer