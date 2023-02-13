const initialState = {
  carlist: [],
  fName: "",
  fCategory: "",
};

export const carReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ADMIN_CARS":
      return {
        ...initialState,
        carlist: action.payload,
      };

      break;

    default:
      break;
  }
};
