import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR
} from "../action-types";
import { AppThunk } from "../../types";
import { getIngredientsRequest } from "../../utils/burger-api";

export const getIngredients:AppThunk = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS_REQUEST });
  getIngredientsRequest()
    .then((data: any) => {
      dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data.data })
    })
    .catch((error) => {
      dispatch({ type: GET_INGREDIENTS_ERROR })
    })
}