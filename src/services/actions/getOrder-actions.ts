import {
  GET_ORDER_FEED_REQUEST,
  GET_ORDER_FEED_SUCCESS,
  GET_ORDER_FEED_ERROR
} from "../action-types";

import { getOrder } from "../../utils/burger-api";
import { AppThunk } from "../../types";

export const getOrderAction:AppThunk = (order: string) => (dispatch) => {
  dispatch({ type: GET_ORDER_FEED_REQUEST });
  getOrder(order)
    .then((data: any) => {
      dispatch({ type: GET_ORDER_FEED_SUCCESS, payload: data.orders[0] })
    })
    .catch((error) => {
      dispatch({ type: GET_ORDER_FEED_ERROR })
    })
}