import { LOGIN_USER, LOGIN_USER_REQUEST, LOGIN_USER_ERROR } from "../action-types"

const initialState = {
  isLoading: false,
  isError: false,
  user: {
    email: "",
    name: ""
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }

    default:
      return state
  }
}

