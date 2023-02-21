import { GET_SPECIFIC_PROFILE } from "../actions";

const initialState = {
  content: [],
};

const getSpecificProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIFIC_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getSpecificProfileReducer;
