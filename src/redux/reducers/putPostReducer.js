import { PUT_POSTS } from "../actions";

const initialState = {
  stock: [],
  isLoading: false,
  isError: false,
};

const putPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_POSTS:
      return {
        ...state,
        stock: state.stock.map(
          (stockElement) =>
            stockElement._id === action.payload.id
              ? //return action payload (modified item) instead of
                //  original item when item id is updated item id
                action.payload
              : stockElement //ids not the same, return original item
        ),
      };
    default:
      return state;
  }
};

export default putPostReducer;
