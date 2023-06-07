import {
  ingredientsReducer as reducer,
  initialState as state
} from './ingredients-reducer';

import * as types from '../action-types'


describe('ingredients reducer', () => {
  const ingr = [
    {
      _id: "643d69a5c3f7b9001cfa093c",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0
    },
  ]
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLoading: true,
        hasError: false,
        ingredients: [],
        constructorIngredients: [],
        constructorBun: []
      }
    )
  })
  it('should handle get ingredients request', () => {
    expect(reducer({}, {
      type: types.GET_INGREDIENTS_REQUEST
    })).toEqual({
      ...state,
      isLoading: true,
      hasError: false
    })
  })
  it('should handle get ingredients success', () => {

    expect(reducer({}, {
      type: types.GET_INGREDIENTS_SUCCESS,
      payload: ingr
    })).toEqual({
        ...state,
        isLoading: false,
        hasError: false,
        ingredients: ingr
      })
  })
  it('should handle get ingredients error', () => {
    expect(reducer({}, {
      type: types.GET_INGREDIENTS_ERROR
    })).toEqual({
      ...state,
      ingredients: [],
      isLoading: false,
      hasError: true
    })
  })
  it('should handle add ingredient', () => {
    expect(reducer({}, {
      type: types.ADD_INGREDIENT,
      payload: "643d69a5c3f7b9001cfa093c"
    })).toEqual({
      ...state,
    })
  })
  it('should handle add bun', () => {
    expect(reducer({}, {
      type: types.ADD_BUN,
      payload: "643d69a5c3f7b9001cfa093c"
    })).toEqual({
      ...state,
    })
  })
  it('should handle remove ingredient', () => {
    expect(reducer({}, {
      type: types.REMOVE_INGREDIENT,
      payload: 1
    })).toEqual({
      ...state,
    })
  })
}) 