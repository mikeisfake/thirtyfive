const initialState = {}

const createMovieReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FROM_API':
      return state = action.payload;
    case 'GET_RESULTS':
      return state;
    default:
      return state;
  }
}

export default createMovieReducer
