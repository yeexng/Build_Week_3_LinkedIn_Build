import { DELETE_EXPERIENCE } from "../actions";

const initialState = {
  content: [],
};

const deleteExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default deleteExperienceReducer;
