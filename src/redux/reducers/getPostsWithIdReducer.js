import { GET_POSTS_WITH_ID } from "../actions";

const initialState = {
  content: [],
};

const getPostsWithIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_WITH_ID:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getPostsWithIdReducer;
