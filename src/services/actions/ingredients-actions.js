import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR
} from "../action-types";

import { getIngredientsRequest } from "../../utils/burger-api";

export const getIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  getIngredientsRequest()
    .then((data) => {
      dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data.data })
    })
    .catch((error) => {
      dispatch({ type: GET_INGREDIENTS_ERROR })
    })
}