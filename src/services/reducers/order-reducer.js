import { GET_ORDER } from "../action-types";

const initialState = {
  order: ''
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        order: action.payload
      };

    default:
      return state
  }
}

export { orderReducer };