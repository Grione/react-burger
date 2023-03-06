import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  CLOSE_ORDER_MODAL
} from "../action-types";

const initialState = {
  isModal: false,
  isLoading: false,
  hasError: false,
  order: ''
}

const orderReducer = (state = initialState, action:{type:string, payload:any}) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        hasError: false,
        isLoading: false,
        order: action.payload,
        isModal: true
      }
    }

    case GET_ORDER_ERROR: {
      return {
        ...state, 
        hasError: true,
        isLoading: false,
        order: initialState.order,
      }
    }

    case CLOSE_ORDER_MODAL: {
      return {
        ...state, 
        isLoading: false,
        isModal: false
      }
    }

    default:
      return state
  }
}

export { orderReducer };