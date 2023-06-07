import {
  authReducer as reducer,
  initialState as state
} from './auth-reducer';

import * as types from '../action-types'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isAuthenticated: false,
        isLoading: false,
        isError: false,
        user: {
          email: "",
          name: ""
        }
      }
    )
  })
  it('should handle get user request', () => {
    expect(reducer({}, {
      type: types.GET_USER_REQUEST
    })).toEqual({
      ...state,
      isLoading: true,
      isError: false
    })
  })
  it('should handle get user success', () => {
    expect(reducer({}, {
      type: types.GET_USER_SUCCESS,
      payload: {
        user: {
          email: "test@test",
          name: "test"
        }
      }
    })).toEqual({
      ...state,
      isLoading: false,
      isError: false,
      isAuthenticated: true,
      user: {
        email: "test@test",
        name: "test"
      }
    })
  })
  it('should handle get user error', () => {
    expect(reducer({}, {
      type: types.GET_USER_ERROR
    })).toEqual({
      ...state,
      isLoading: false,
      isError: true
    })
  })
  it('should handle login user request', () => {
    expect(reducer({}, {
      type: types.LOGIN_USER_REQUEST
    })).toEqual({
      ...state,
      isLoading: true,
      isError: false
    })
  })
  it('should handle login user success', () => {
    expect(reducer({}, {
      type: types.LOGIN_USER,
      payload: {
        user: {
          email: "test@test",
          name: "test"
        }
      }
    })).toEqual({
      ...state,
      user: {
        email: "test@test",
        name: "test"
      },
      isAuthenticated: true,
      isLoading: false,
      isError: false
    })
  })
  it('should handle login user error', () => {
    expect(reducer({}, {
      type: types.LOGIN_USER_ERROR
    })).toEqual({
      ...state,
      isLoading: false,
      isError: true
    })
  })
  it('should handle register user request', () => {
    expect(reducer({}, {
      type: types.REGISTER_USER_REQUEST
    })).toEqual({
      ...state,
      isLoading: true,
      isError: false
    })
  })
  it('should handle register user success', () => {
    expect(reducer({}, {
      type: types.REGISTER_USER_SUCCESS,
      payload: {
        user: {
          email: "test@test",
          name: "test"
        }
      }
    })).toEqual({
      ...state,
      user: {
        email: "test@test",
        name: "test"
      },
      isAuthenticated: true,
      isLoading: false,
      isError: false
    })
  })
  it('should handle register user error', () => {
    expect(reducer({}, {
      type: types.REGISTER_USER_ERROR
    })).toEqual({
      ...state,
      isLoading: false,
      isError: true
    })
  })
  it('should handle logout user request', () => {
    expect(reducer({}, {
      type: types.LOGOUT_USER_REQUEST
    })).toEqual({
      ...state,
      isLoading: true,
      isError: false
    })
  })
  it('should handle logout user success', () => {
    expect(reducer({}, {
      type: types.LOGOUT_USER_SUCCESS
    })).toEqual({
      ...state,
      isLoading: false,
      isError: false,
      isAuthenticated: false,
      user: {
        email: "",
        name: ""
      }
    })
  })
  it('should handle logout user error', () => {
    expect(reducer({}, {
      type: types.LOGOUT_USER_ERROR
    })).toEqual({
      ...state,
      isLoading: false,
      isError: true
    })
  })
}) 