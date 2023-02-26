import {
  LOGIN_USER,
  LOGIN_USER_REQUEST,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR
} from "../action-types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  user: {
    email: "",
    name: ""
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuthenticated: true,
        user: action.payload.user
      }
    case GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        isError: false
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        isError: false
      }
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuthenticated: false,
        user: null
      }
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }


    default:
      return state
  }
}
