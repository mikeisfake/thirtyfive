export const getResults = (query) => {
  const URL = `http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}`

  return dispatch => fetch(URL)
  .then(res => res.json())
  .then(results => dispatch({type: 'GET_RESULTS', payload: results.Search}))
}
