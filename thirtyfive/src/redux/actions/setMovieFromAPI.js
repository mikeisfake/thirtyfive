export const setMovieFromAPI= imdbid => {
  const URL = `http://www.omdbapi.com/?i=${imdbid}&apikey=${process.env.REACT_APP_API_KEY}`

  return dispatch => fetch(URL)
    .then(res => res.json())
    .then(data => dispatch({
      type: 'SET_FROM_API',
      payload: data
    }))
  }
