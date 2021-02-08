const initialState = []

const getReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REVIEWS':
      return state = action.payload || [];
    case 'SAVE_REVIEW':
      return state = action.payload || [];
    default:
      return state;
  }
}

export default getReviewsReducer
