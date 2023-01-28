import { v4 as uuidv4 } from 'uuid';

import {
  GET_INGREDIENTS_START,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILURE,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_BUN,
  REORDER_INGREDIENTS
} from '../action-types';

const initialState = {
  isLoading: true,
  hasError: false,
  ingredients: [],
  constructorIngredients: [],
  constructorBun: []
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
        constructorIngredients: [...state.constructorIngredients,
        { ...state.ingredients.find((item) => item._id === action.payload), key: uuidv4() }
        ],

      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        constructorIngredients: state.constructorIngredients
          .filter((el) => el.key !== action.payload)
      }
    case REORDER_INGREDIENTS:
      let item = state.constructorIngredients.splice(action.payload.from, 1)[0];
      let newState = [...state.constructorIngredients];
      newState.splice(action.payload.to, 0, item)
      return {
        ...state,
        constructorIngredients: newState
      }
    case ADD_BUN:
      return {
        ...state,
        constructorBun: [state.ingredients.find((item) => item._id === action.payload)]
      }
    default:
      return state
  }
}



export { ingredientsReducer }