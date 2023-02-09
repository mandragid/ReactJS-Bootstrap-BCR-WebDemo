export const AuthCheck = (payload) => (dispatch) => {
        const token = localStorage.getItem("token")
        if (!token) {
            dispatch({
                type: "CHECK_TOKEN_ADMIN",
                payload:{
                    isLogin: false,
                    loading: false,
                }
            })
        } else {
            dispatch({
                type: "CHECK_TOKEN",
                payload:{
                    isLogin: true,
                    loading: false,
                }
            })
        }
    }

export const AuthCheckCustomer = (payload) => (dispatch) => {
    const token = localStorage.getItem("token")
    if (!token) {
        dispatch({
            type: "CHECK_TOKEN_CUSTOMER",
            payload:{
                isLogin: false,
                loading: false,
            }
        })
    } else {
        dispatch({
            type: "CHECK_TOKEN",
            payload:{
                isLogin: true,
                loading: false,
            }
        })
    }
}