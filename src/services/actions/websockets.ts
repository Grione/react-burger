import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  USER_WS_CONNECTION_START,
  USER_WS_CONNECTION_SUCCESS,
  USER_WS_CONNECTION_ERROR,
  USER_WS_CONNECTION_CLOSED,
  USER_WS_GET_MESSAGE,
} from "../action-types";

import { TOrders, TUserOrders, TWSActions } from "../../types";

export const wsConnectionStart = () => {
  return {
    type: WS_CONNECTION_START
  };
};

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsGetOrderds = (payload: TOrders) => {
  return {
    type: WS_GET_MESSAGE,
    payload
  };
};

export const wsConnectionStartUser = () => {
  return {
    type: USER_WS_CONNECTION_START
  };
};

export const wsConnectionSuccessUser = () => {
  return {
    type: USER_WS_CONNECTION_SUCCESS
  };
};

export const wsConnectionErrorUser = () => {
  return {
    type: USER_WS_CONNECTION_ERROR
  };
};

export const wsConnectionClosedUser = () => {
  return {
    type: USER_WS_CONNECTION_CLOSED
  };
};

export const wsGetOrderdsUser = (payload: TUserOrders) => {
  return {
    type: USER_WS_GET_MESSAGE,
    payload
  };
};

export const wsActions: TWSActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

export const wsActionsUser: TWSActions = {
  wsInit: USER_WS_CONNECTION_START,
  onOpen: USER_WS_CONNECTION_SUCCESS,
  onClose: USER_WS_CONNECTION_CLOSED,
  onError: USER_WS_CONNECTION_ERROR,
  onMessage: USER_WS_GET_MESSAGE
};


