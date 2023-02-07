const initialState ={
    carsData: [],
    carData: {},
    message: "",
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CARS' :
        return {
            ...initialState,
            carsData : action.payload
            }
        case 'SINGLE' :
            return {
                ...initialState,
                carData: action.payload
            }
        case 'DELETE' :
            return {
                ...initialState,
                message : action.payload
            }
        case 'EDIT':
            return{
                ...initialState,
                carData: action.payload
            }
        case 'ADD_CAR':
            return{
                ...initialState,
                carData: action.payload
            }
        default :
            return state
    }
}

export default carReducer