import {
  GET_INGREDIENTS_START,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILURE,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from '../action-types';

const initialState = {
  isLoading: true,
  hasError: false,
  ingredients: [],
  constructorIngredients: []
}

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_START:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        ingredients: action.payload
      }
    case GET_INGREDIENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    case ADD_INGREDIENT:
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          state.ingredients.find((item) => item._id === action.payload)]
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        constructorIngredients: state.constructorIngredients.filter((el) => el._id !== action.payload)
      }
    default:
      return state
  }
}



export { ingredientsReducer }