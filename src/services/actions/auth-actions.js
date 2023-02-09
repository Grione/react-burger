import { loginRequest } from "../../utils/burger-api";
import { LOGIN_USER, LOGIN_USER_REQUEST, LOGIN_USER_ERROR } from "../action-types";

export const loginUser = (form) => (dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST
  });

  return loginRequest(form).then((data) => {
    if (data.ok) {
      dispatch({
        type: LOGIN_USER,
        payload: data.user
      })
    } else {
      dispatch({
        type: LOGIN_USER_ERROR
      })
    }
  })
}