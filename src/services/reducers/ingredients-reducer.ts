import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_BUN,
  REORDER_INGREDIENTS
} from '../action-types';

import { TIngredient } from '../../types';
import { TUnionAction } from '../actions/interfaces';

type TInitialState = {
  isLoading: boolean,
  hasError: boolean,
  ingredients: Array<TIngredient>,
  constructorIngredients: Array<TIngredient>,
  constructorBun: Array<TIngredient>
}

const initialState: TInitialState = {
  isLoading: true,
  hasError: false,
  ingredients: [],
  constructorIngredients: [],
  constructorBun: []
}

const ingredientsReducer = (state = initialState, action: TUnionAction): TInitialState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
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
    case GET_INGREDIENTS_ERROR:
      return {
        ...state,
        ingredients: initialState.ingredients,
        isLoading: false,
        hasError: true
      }
    case ADD_INGREDIENT:
      const isIngr = state.ingredients.find((item) => item._id === action.payload);
      if (isIngr) {
        return {
          ...state,
          constructorIngredients: [...state.constructorIngredients, { ...isIngr, key: action.key }]
        }
      }
      return {
        ...state
      }

    case ADD_BUN:
      const isIngrBun = state.ingredients.find((item) => item._id === action.payload);
      if (isIngrBun) {
        return {
          ...state,
          constructorBun: [isIngrBun]
        }
      }
      return {
        ...state
      }
    case REMOVE_INGREDIENT:
      return {
        ...state,
        constructorIngredients: state.constructorIngredients.filter((el: any) => el.key !== action.payload)
      }
    case REORDER_INGREDIENTS:
      let item = state.constructorIngredients.splice(action.payload.from, 1)[0];
      let newState = [...state.constructorIngredients];
      newState.splice(action.payload.to, 0, item)
      return {
        ...state,
        constructorIngredients: newState
      }

    default:
      return state
  }
}



export { ingredientsReducer, initialState }