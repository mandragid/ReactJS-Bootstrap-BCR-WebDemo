const initialState = {
    isLogin : false,
    loading : true,
    user: "",
    message: "",
    name:"",
}
export const authReducer  = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_TOKEN_ADMIN":
            return{
                ...initialState,
                isLogin: action.payload.isLogin,
                loading: action.payload.loading,
            }
        case "CHECK_TOKEN_CUSTOMER":
            return{
                ...initialState,
                isLogin: action.payload.isLogin,
                loading: action.payload.loading,
            }
        
        default:
            return state
    }   
    
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "USER":
			return {
				...initialState,
				user: action.payload.user,
                isLogin: action.payload.isLogin,
			};
        case "ERROR":
            return {
                ...initialState,
                message: action.payload,
                name: action.payload,
            }
		default:
			return state;
	}
};
