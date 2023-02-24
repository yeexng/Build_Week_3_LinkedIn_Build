import { GET_POSTS } from "../actions";

const initialState = {
  content: [],
};

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getPostsReducer;
