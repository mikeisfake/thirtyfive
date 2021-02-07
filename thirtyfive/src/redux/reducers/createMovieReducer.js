const initialState = {}

const createMovieReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_MOVIE':
      return state = action.payload;
    case 'GET_RESULTS':
      return state;
    default:
      return state;
  }
}

export default createMovieReducer
