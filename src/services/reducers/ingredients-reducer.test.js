import {
  ingredientsReducer as reducer,
  initialState as initState
} from './ingredients-reducer';

import * as types from '../action-types';


const state = {
  ...initState,
  ingredients: [{
    _id: "1",
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
    __v: 0,
    key: "12345"
  },
  {
    _id: "2",
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
  {
    _id: "3",
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
    __v: 0,
    key: "12345"
  }]
}

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
        ...initState
      }

    )
  })
  it('should handle get ingredients request', () => {
    expect(reducer(state, {
      type: types.GET_INGREDIENTS_REQUEST
    })).toEqual({
      ...state,
      isLoading: true,
      hasError: false
    })
  })

  it('should handle get ingredients success', () => {

    expect(reducer(state, {
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
    expect(reducer(state, {
      type: types.GET_INGREDIENTS_ERROR
    })).toEqual({
      ...state,
      ingredients: [],
      isLoading: false,
      hasError: true
    })
  })

  it('should handle add ingredient', () => {

    expect(reducer(state, {
      type: types.ADD_INGREDIENT,
      payload: "3",
      key: "12345"
    })).toEqual({
      ...state,
      constructorIngredients: [...state.constructorIngredients, { ...state.ingredients.find((e) => e._id === "3"), key: "12345" }]
    })
  })
  it('should handle add bun', () => {
    expect(reducer(state, {
      type: types.ADD_BUN,
      payload: "1"
    })).toEqual({
      ...state,
      constructorBun: [state.ingredients.find((i) => i._id === "1")]
    })
  })

  it('should handle remove ingredient', () => {
    const iState = {
      ...state,
      constructorIngredients: [{ key: "2" }]
    }
    expect(reducer(iState, {
      type: types.REMOVE_INGREDIENT,
      payload: "2"
    })).toEqual({
      ...state,
      constructorIngredients: iState.constructorIngredients.filter((el) => el.key !== "2")
    })
  })
  it('should handle reorder ingredient', () => {
    const iState = {
      ...state,
      constructorIngredients: [
        {
          _id: "1"
        }, 
        {
          _id: "2"
        },
        {
          _id: "3"
        }
      ]
    }

    let item = iState.constructorIngredients.splice(1, 1)[0];
    let newState = [...iState.constructorIngredients];
    newState.splice(2, 0)

    expect(reducer(iState, {
      type: types.REORDER_INGREDIENTS,
      payload: {
        from: 1,
        to: 2
      }
    })).toEqual({
      ...state,
      constructorIngredients: newState
    })
  })
}) 