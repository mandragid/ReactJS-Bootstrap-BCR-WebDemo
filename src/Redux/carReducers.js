const initialState = {
  carData: [],
  orderList: [],
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

    case "GET_ORDER_LIST":
      return {
        ...initialState,
        orderList: action.payload,
      };

    default:
      return state;
  }
};
