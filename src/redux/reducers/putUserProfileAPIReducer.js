import { PUT_USER_PROFILE_UPDATE, GET_USER_LOADING, GET_USER_ERROR } from "../actions";

const initialState = {
    stock: [],
    isLoading: false,
    isError: false,
}

const getUserProfileAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_USER_PROFILE_UPDATE:
            return {
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