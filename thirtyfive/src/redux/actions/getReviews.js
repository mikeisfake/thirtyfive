export const getReviews = movie_id => {
  const URL = `http://localhost:3001/movies/${movie_id}/reviews`

  return dispatch => fetch(URL)
    .then(res => res.json())
    .then(data => dispatch({
      type: 'GET_REVIEWS',
      payload: data
    }))
}
