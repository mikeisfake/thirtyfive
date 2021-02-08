const initialState = {}

const getMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_MOVIE':
      return state = action.payload || {};
    case 'SET_FROM_DB':
      return state = action.payload;
    default:
      return state;
  }
}

export default getMovieReducer
