import { GET_ALL_PROFILE } from "../actions";

const initialState = {
  content: [],
};

const allProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROFILE:
      return {
        ...state,
        content: [action.payload],
      };
    default:
      return state;
  }
};

export default allProfileReducer;
