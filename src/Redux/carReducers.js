const initialState = {
  carData: [],
};

export const carReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ADMIN_CARS":
      return {
        ...initialState,
        carData: action.payload,
      };

    case "GET_ALL_CARS":
      return {
        ...initialState,
        carData: action.payload,
      };

    default:
      return state;
  }
};
