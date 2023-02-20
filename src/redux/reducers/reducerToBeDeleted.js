import { ADD_TO_FAVORITES } from "../actions";
import { REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
    content: [],
    isLoading: false,
    isError: false,
};

const reducerToBeDeleted = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                content: [...state.content, action.payload],
            };

        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                content: state.content.filter((el) => el.id !== action.payload),
            };

        default:
            return state;
    }
};

export default reducerToBeDeleted;
