export const handleBankBCA = () => (dispatch) => {
  dispatch({
    type: "BCA",
    payload: {
      isBankChosen: "BCA",
      isBCA: true,
      isBNI: false,
      isMandiri: false,
    },
  });
};

export const handleBankBNI = () => (dispatch) => {
  dispatch({
    type: "BNI",
    payload: {
      isBankChosen: "BNI",
      isBNI: true,
      isBCA: false,
      isMandiri: false,
    },
  });
};

export const handleBankMandiri = () => (dispatch) => {
  dispatch({
    type: "Mandiri",
    payload: {
      isBankChosen: "Mandiri",
      isMandiri: true,
      isBCA: false,
      isBNI: false,
    },
  });
};
