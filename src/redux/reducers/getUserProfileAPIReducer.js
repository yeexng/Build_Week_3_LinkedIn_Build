import { GET_USER_PROFILE_API, GET_USER_LOADING, GET_USER_ERROR } from "../actions";

const initialState = {
    stock: [],
    isLoading: false,
    isError: false,
}

const getUserProfileAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE_API:
            return {
                ...state,
                stock: action.payload,
            }

        case GET_USER_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        case GET_USER_ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        default:
            return state
    }
}

export default getUserProfileAPIReducer