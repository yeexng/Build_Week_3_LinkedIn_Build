import { PUT_USER_EXPERIENCE_UPDATE, GET_USER_LOADING, GET_USER_ERROR } from "../actions";

const initialState = {
    stock: [],
    isLoading: false,
    isError: false,
}

const putUserExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_USER_EXPERIENCE_UPDATE:
            return {
                ...state,
                stock: state.stock.map(
                    stockElement =>
                        stockElement._id === action.payload.id
                            //return action payload (modified item) instead of
                            //  original item when item id is updated item id
                            ? action.payload
                            : stockElement //ids not the same, return original item
                )
            };

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

export default putUserExperienceReducer