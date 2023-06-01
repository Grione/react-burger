import {
  GET_ORDER_FEED_REQUEST,
  GET_ORDER_FEED_SUCCESS,
  GET_ORDER_FEED_ERROR
} from '../action-types';

import { TOrder } from '../../types';
import { TUnionAction } from '../actions/interfaces';

type TInitialState = {
  isLoading: boolean,
  hasError: boolean,
  order: TOrder,
}


const initialState: TInitialState = {
  isLoading: true,
  hasError: false,
  order: {
    ingredients: [],
    _id: "",
    status: "",
    number: 0,
    createdAt: '',
    updatedAt: '',
    name: ''
  }
}

const getOrderReducer = (state = initialState, action: TUnionAction): TInitialState => {
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