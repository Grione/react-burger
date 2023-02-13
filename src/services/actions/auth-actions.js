
import {
  loginRequest,
  registerRequest,
  userRequest,
  refreshTokenRequest,
  saveTokens,
  userChangeRequest,
  logOutRequest
} from "../../utils/burger-api";
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

export const loginUser = (form, cb) => (dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST
  });

  return loginRequest(form).then((data) => {

    if (data.accessToken) {
      const authToken = data.accessToken;
      saveTokens(data.refreshToken, authToken);
    }

    dispatch({
      type: LOGIN_USER,
      payload: data
    })
    cb();

  }).catch(() => {
    dispatch({
      type: LOGIN_USER_ERROR
    })
  })
}

export const registerUser = (form, cb) => (dispatch) => {
  dispatch({
    type: REGISTER_USER_REQUEST
  });

  return registerRequest(form).then((data) => {

    if (data.accessToken) {
      const authToken = data.accessToken;
      saveTokens(data.refreshToken, authToken);
    }

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    cb();

  }).catch(() => {
    dispatch({
      type: REGISTER_USER_ERROR
    })
  })
}

export const getUser = () => (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST
  });

  return userRequest().then((data) => {
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data
    })
  }).catch((error) => {
    if (error.message === 'jwt expired') {
      dispatch(refreshToken(getUser()));
    } else {
      dispatch({
        type: GET_USER_ERROR,
        payload: error.message,
      });
    }
  })
}

export const changeUser = (form) => (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST
  });

  return userChangeRequest(form).then((data) => {
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data
    })
  }).catch((error) => {
    if (error.message === 'jwt expired') {
      dispatch(refreshToken(changeUser(form)));
    } else {
      dispatch({
        type: GET_USER_ERROR,
        payload: error.message,
      });
    }
  })
}

export const logOut = (cb) => (dispatch) => {
  dispatch({
    type: LOGOUT_USER_REQUEST
  });

  return logOutRequest().then((data) => {
    if (data.success) {
      dispatch({
        type: LOGOUT_USER_SUCCESS
      });
      cb();
    }
  }).catch(() => {
    dispatch({ type: LOGOUT_USER_ERROR })
  })
}

const refreshToken = (afterRefresh) => (dispatch) => {
  refreshTokenRequest()
    .then((res) => {
      saveTokens(res.refreshToken, res.accessToken);
      dispatch(afterRefresh);
    })
};