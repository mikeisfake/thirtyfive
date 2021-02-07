import resultsReducer from './resultsReducer'
import createMovieReducer from './createMovieReducer'
import getMovieReducer from './getMovieReducer'
import getReviewsReducer from './getReviewsReducer'
import getRandomsReducer from './getRandomsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  results: resultsReducer,
  movie: createMovieReducer,
  userMovie: getMovieReducer,
  currentReviews: getReviewsReducer,
  randomMovies: getRandomsReducer,
})

export default rootReducer
