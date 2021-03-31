export function fetchUser (payload) {
  return {type: 'users/setUsers', payload}
}
export function addFavoriteUser (payload) {
  return {type: 'favorite/addFavorite' , payload}
}
export function findUser (payload) {
  return {type: 'user/setUser', payload}
}