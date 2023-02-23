import { POST_IMAGE_TO_POST } from "../actions";

const initialState = {
  content: [],
};

const addPostImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_IMAGE_TO_POST:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default addPostImageReducer;
