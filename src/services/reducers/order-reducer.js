import { GET_ORDER, CLOSE_MODAL } from "../action-types";

const initialState = {
  isModal: false,
  order: ''
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        order: action.payload,
        isModal: true
      };
    case CLOSE_MODAL: {
      return {
        ...state,
        isModal: false
      }
    }

    default:
      return state
  }
}

export { orderReducer };