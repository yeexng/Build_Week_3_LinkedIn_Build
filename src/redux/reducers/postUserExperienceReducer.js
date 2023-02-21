import { POST_USER_EXPERIENCE } from '../actions'

const initialState = {
    content: [],
};

const postUserExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_USER_EXPERIENCE:
            return {
                ...state,
                content: action.payload,
            };
        default:
            return state;
    }
};

export default postUserExperienceReducer;