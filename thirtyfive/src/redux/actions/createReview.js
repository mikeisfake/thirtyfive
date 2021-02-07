export const createReview = (movie_id, data) => {
  const body = {body: data}
  const URL = `http://localhost:3001/movies/${movie_id}/reviews`

  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  return dispatch => fetch(URL, config)
    .then(res => res.json())
    .then(data =>
      dispatch ({
        type: 'SAVE_REVIEW',
        payload: data
      })
    )
}
