const initialState = []

const resultsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_RESULTS':
      return state = action.payload || [];
    default:
      return state
  }
}

export default resultsReducer
