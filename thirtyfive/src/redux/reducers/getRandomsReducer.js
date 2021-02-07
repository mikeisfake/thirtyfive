const initialState = []

const getRandomsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_RANDOMS':
      return state = action.payload || [];
    default:
      return state;
  }
}

export default getRandomsReducer
