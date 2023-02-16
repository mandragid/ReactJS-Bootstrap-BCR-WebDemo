const initialState = {
  isBankChosen: "",
  isBCA: false,
  isBNI: false,
  isMandiri: false,
};
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BCA":
      return {
        ...initialState,
        isBankChosen: action.payload.isBankChosen,
        isBCA: action.payload.isBCA,
        isBNI: action.payload.isBNI,
        isMandiri: action.payload.isMandiri,
      };
    case "BNI":
      return {
        ...initialState,
        isBankChosen: action.payload.isBankChosen,
        isBCA: action.payload.isBCA,
        isBNI: action.payload.isBNI,
        isMandiri: action.payload.isMandiri,
      };
    case "Mandiri":
      return {
        ...initialState,
        isBankChosen: action.payload.isBankChosen,
        isBCA: action.payload.isBCA,
        isBNI: action.payload.isBNI,
        isMandiri: action.payload.isMandiri,
      };

    default:
      return state;
  }
};
