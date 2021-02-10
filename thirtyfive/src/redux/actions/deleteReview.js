export const deleteReview = id => {
  const URL = `http://localhost:3001/reviews`

  const review = {review: {id: id}}

  const config = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  }

  return dispatch => fetch(URL, config)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: 'DELETE_REVIEW',
        payload: data
      })
    )
}
