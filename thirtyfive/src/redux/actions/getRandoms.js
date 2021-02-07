export const getRandoms = () => {

  const URL = `http://localhost:3001/movies`
  return dispatch => fetch(URL)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: 'GET_RANDOMS',
        payload: data
      })
    )
}
