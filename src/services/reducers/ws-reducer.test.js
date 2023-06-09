import {
  wsReducer,
  userWsReducer,
  initialState as initState
} from './ws-reducer';

import * as types from '../action-types';


describe('ws reducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(
      {
        wsConnected: false,
        orders: [],
        error: "",
        total: 0,
        totalToday: 0
      }

    )
  })

  it('should handle ws get order request', () => {
    expect(wsReducer(initState, {
      type: types.WS_CONNECTION_SUCCESS
    })).toEqual({
      ...initState,
      error: "",
      wsConnected: true,
    })
  })

  it('should handle ws get order error', () => {
    expect(wsReducer(initState, {
      type: types.WS_CONNECTION_ERROR, 
      payload: "error"
    })).toEqual({
      ...initState,
      error: "error",
      wsConnected: false,
    })
  })

  it('should handle ws get order closed', () => {
    expect(wsReducer(initState, {
      type: types.WS_CONNECTION_CLOSED
    })).toEqual({
      ...initState,
      error: "",
      wsConnected: false,
    })
  })

  
  it('should handle ws get order close', () => {
    expect(wsReducer(initState, {
      type: types.WS_CONNECTION_CLOSE
    })).toEqual({
      ...initState,
      error: "",
      wsConnected: false,
    })
  })

  it('should handle ws get order message', () => {
    expect(wsReducer(initState, {
      type: types.WS_CONNECTION_CLOSE, 
      payload: {
        data: {
          orders: [],
          total: 0,
          totalToday: 0
        }
      }
    })).toEqual({
      ...initState,
      orders: [],
      total: 0,
      totalToday: 0
    })
  })

}) 