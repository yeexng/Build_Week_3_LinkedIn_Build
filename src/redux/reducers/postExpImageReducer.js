import { POST_IMAGE_TO_EXP } from "../actions";

const initialState = {
  content: [],
};

const postExpImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_IMAGE_TO_EXP:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default postExpImageReducer;
