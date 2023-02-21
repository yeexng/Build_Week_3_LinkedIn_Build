import { GET_EXPERIENCE_WITH_EXP_ID } from "../actions";

const initialState = {
  content: [],
};

const getExperienceWithExpIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE_WITH_EXP_ID:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getExperienceWithExpIdReducer;
