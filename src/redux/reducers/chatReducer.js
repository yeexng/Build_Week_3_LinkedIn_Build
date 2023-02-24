import { TOGGLE_SHOW } from "../actions";

const initialState = {
  showShow: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW:
      return {
        ...state,
        showShow: !state.showShow,
      };
    default:
      return state;
  }
};

export default chatReducer;
