import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from "../action-types";

const initialState = {
  currentIngredient: {},
  isModal: false
}

const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT:
      return {
        ...state,
        currentIngredient: action.payload,
        isModal: true
      };
    case CLOSE_INGREDIENT:
      return {
        ...state,
        currentIngredient: {},
        isModal: false
      }

    default:
      return state
  }
}

export { currentIngredientReducer }; 