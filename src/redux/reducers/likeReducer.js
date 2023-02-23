import { LIKE, UNLIKE } from "../actions";

const initialState = {
  like: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        like: [...state.like, action.payload],
      };
    case UNLIKE:
      return {
        ...state,
        like: state.like.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default likeReducer;
