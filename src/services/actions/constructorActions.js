import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../action-types";

export const addIngredients = (item) => (
  {
    type: ADD_INGREDIENT,
    payload: item
  }
)

export const removeIngredient = (id) => (
  {
    type: REMOVE_INGREDIENT,
    payload: id
  }
)