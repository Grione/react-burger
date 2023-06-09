import {
  orderReducer as reducer,
  initialState as initState
} from './order-reducer';

import * as types from '../action-types';


describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isModal: false,
        isLoading: false,
        hasError: false,
        order: '',
      }

    )
  })

  it('should handle get order request', () => {
    expect(reducer(initState, {
      type: types.GET_ORDER_REQUEST
    })).toEqual({
      ...initState,
      isLoading: true,
      hasError: false,
      isModal: true
    })
  })

  it('should handle get order success', () => {
    expect(reducer(initState, {
      type: types.GET_ORDER_SUCCESS,
      payload: "4"
    })).toEqual({
      ...initState,
      hasError: false,
      isLoading: false,
      order: "4",
      isModal: true
    })
  })

  it('should handle get order error', () => {
    expect(reducer(initState, {
      type: types.GET_ORDER_ERROR
    })).toEqual({
      ...initState,
      hasError: true,
      isLoading: false,
      order: initState.order,
    })
  })
  it('should handle close modal', () => {
    expect(reducer(initState, {
      type: types.CLOSE_ORDER_MODAL
    })).toEqual({
      ...initState,
      isLoading: false,
      isModal: false
    })
  })

}) 