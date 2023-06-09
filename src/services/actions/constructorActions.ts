import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../action-types";
import { TIngredient } from "../../types";


export const addIngredients = (item:TIngredient) => (
  {
    type: ADD_INGREDIENT,
    payload: item,
    key: item.key
  }
)

export const removeIngredient = (id:string) => (
  {
    type: REMOVE_INGREDIENT,
    payload: id
  }
)