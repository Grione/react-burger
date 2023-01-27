import {
  GET_INGREDIENTS_START,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILURE,
} from '../action-types';

const initialState = {
  isLoading: true,
  hasError: false,
  ingredients: []
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
    default:
      return state
  }
}


export { ingredientsReducer }