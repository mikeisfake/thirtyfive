import resultsReducer from './resultsReducer'
import createMovieReducer from './createMovieReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  results: resultsReducer,
  movie: createMovieReducer,
})

export default rootReducer
