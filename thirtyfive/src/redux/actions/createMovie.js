export const createMovie = imdbid => {
  const URL = `http://www.omdbapi.com/?i=${imdbid}&apikey=${process.env.REACT_APP_API_KEY}`

  return dispatch => fetch(URL)
  .then(res => res.json())
  .then(results => dispatch({
    type: 'SET_MOVIE',
    payload: results
  }))
}
