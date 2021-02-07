export const persistMovie = (movieData) => {
  const movie = {movie: {}}

  for (let key in movieData) {
    const data = movieData[key]
    key = key.toLowerCase()
    movie.movie[key] = data
  }

  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  }

  const URL = 'http://localhost:3001/movies'

  return dispatch => fetch(URL, config)
    .then(res => res.json())
    .then(data =>
      dispatch ({
        type: 'SAVE_MOVIE',
        payload: data
      })
    )
}
