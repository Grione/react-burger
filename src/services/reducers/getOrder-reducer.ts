import {
  GET_ORDER_FEED_REQUEST,
  GET_ORDER_FEED_SUCCESS,
  GET_ORDER_FEED_ERROR
} from '../action-types';

const initialState: any = {
  isLoading: true,
  hasError: false,
  order: false
}

const getOrderReducer = (state = initialState, action: { type: string, payload?: any }) => {
  switch (action.type) {
    case GET_ORDER_FEED_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case GET_ORDER_FEED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        order: action.payload
      }
    case GET_ORDER_FEED_ERROR:
      return {
        ...state,
        order: initialState.order,
        isLoading: false,
        hasError: true
      }
    default:
      return state
  }
}



export { getOrderReducer }