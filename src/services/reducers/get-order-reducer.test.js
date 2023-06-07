import {
  getOrderReducer as reducer,
  initialState as state
} from './getOrder-reducer';

import * as types from '../action-types'


describe('get order reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLoading: true,
        hasError: false,
        order: {
          ingredients: [],
          _id: "",
          status: "",
          number: 0,
          createdAt: '',
          updatedAt: '',
          name: ''
        }
      }
    )
  })
  it('should handle get order feed request', () => {
    expect(reducer({}, {
      type: types.GET_ORDER_FEED_REQUEST
    })).toEqual({
      ...state,
      isLoading: true,
      hasError: false
    })
  })
  it('should handle get order feed success', () => {
    expect(reducer({}, {
      type: types.GET_ORDER_FEED_SUCCESS,
      payload: 4215
    })).toEqual({
      ...state,
      isLoading: false,
      hasError: false,
      order: 4215
    })
  })
  it('should handle get order feed error', () => {
    expect(reducer({}, {
      type: types.GET_ORDER_FEED_ERROR,
    })).toEqual({
      ...state,
      order: {
        ingredients: [],
        _id: "",
        status: "",
        number: 0,
        createdAt: '',
        updatedAt: '',
        name: ''
      },
      isLoading: false,
      hasError: true
    })
  })
}) 