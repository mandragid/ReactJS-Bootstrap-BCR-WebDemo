const initialState = {
	user: "",
};

const userReducers = (state = initialState, action) => {
	switch (action.type) {
		case "USER":
			return {
				...initialState,
				user: action.payload,
			};

		default:
			return state;
	}
};

export default userReducers;
