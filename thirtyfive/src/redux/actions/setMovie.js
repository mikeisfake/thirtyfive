export const setMovie = (movie_id) => {
  const URL =  `http://localhost:3001/movies/${movie_id}`

  return dispatch => fetch(URL)
    .then(res => res.json())
    .then( data =>
      dispatch({
        type: 'SET_FROM_DB',
        payload: data
      })
    )
}
