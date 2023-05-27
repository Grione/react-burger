import { v4 as uuidv4 } from 'uuid';

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_BUN,
  REORDER_INGREDIENTS
} from '../action-types';

import { TOrder } from '../../types';

type TInitialState = {
  isLoading: boolean,
  hasError: boolean,
  ingredients: Array<TOrder>,
  constructorIngredients: Array<TOrder>,
  constructorBun: Array<TOrder>
}

const initialState: any = {
  isLoading: true,
  hasError: false,
  ingredients: [],
  constructorIngredients: [],
  constructorBun: []
}

const ingredientsReducer = (state = initialState, action: { type: string, payload?: any }) => {
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
      return {
        ...state,
        constructorIngredients: [...state.constructorIngredients,
        { ...state.ingredients.find((item: any) => item._id === action.payload), key: uuidv4() }
        ],

      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        constructorIngredients: state.constructorIngredients
          .filter((el:any) => el.key !== action.payload)
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
        constructorBun: [state.ingredients.find((item: any) => item._id === action.payload)]
      }
    default:
      return state
  }
}



export { ingredientsReducer }