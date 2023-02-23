import { POST_PROFILE_PIC } from "../actions";

const initialState = {
  content: [],
};

const postProfilePicReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_PROFILE_PIC:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default postProfilePicReducer;
