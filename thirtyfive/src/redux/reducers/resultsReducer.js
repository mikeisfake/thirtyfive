const initialState = []

const resultsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_RESULTS':
      return state = action.payload || [];
    case 'SET_MOVIE':
      return state = [];
    default:
      return state
  }
}

export default resultsReducer
