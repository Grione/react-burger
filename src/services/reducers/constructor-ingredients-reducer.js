import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from '../action-types';

const initialState = {
  constructorIngredients: []
}

const constructorIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        constructorIngredients: action.payload
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        constructorIngredients: state.constructorIngredients.filter((el) => el.id !== action.id)
      }

    default:
      return state
  }
}

export { constructorIngredientsReducer }