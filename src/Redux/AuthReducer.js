const initialState = {
    isLogin : false
}
const authReducer  = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_TOKEN":
            return{
                ...initialState,
                isLogin: action.payload.isLogin,
                loading: action.payload.loading,
            }
            default:
                return state
    }   
}

export default authReducer