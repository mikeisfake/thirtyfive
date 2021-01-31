export const saveMovie = (data) => {
  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const URL = 'localhost:3001/movies'

  return dispatch => fetch(URL, config)
  .then(res => res.json())
  .then(data => persistMovie(data))
}
