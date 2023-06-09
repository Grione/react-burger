import {
  LOGIN_USER,
  LOGIN_USER_REQUEST,
  LOGIN_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_ERROR,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_CLOSE,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  USER_WS_CONNECTION_START,
  USER_WS_CONNECTION_SUCCESS,
  USER_WS_CONNECTION_ERROR,
  USER_WS_CONNECTION_CLOSED,
  USER_WS_CONNECTION_CLOSE,
  USER_WS_GET_MESSAGE,
  USER_WS_SEND_MESSAGE,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REORDER_INGREDIENTS,
  ADD_BUN,
  GET_ORDER_REQUEST,
  GET_ORDER_ERROR,
  GET_ORDER_FEED_ERROR,
  GET_ORDER_FEED_REQUEST,
  GET_ORDER_FEED_SUCCESS,
  GET_ORDER_SUCCESS,
  CLOSE_ORDER_MODAL

} from "../action-types";

import { TIngredient, TOrder, TUser } from "../../types";

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST
}

export interface IGetUserSucces {
  readonly type: typeof GET_USER_SUCCESS,
  readonly payload: TUser
}

export interface IGetUserError {
  readonly type: typeof GET_USER_ERROR
}

export interface ILoginUserRequest {
  readonly type: typeof LOGIN_USER_REQUEST
}

export interface ILoginUser {
  readonly type: typeof LOGIN_USER,
  readonly payload: TUser
}

export interface ILoginUserError {
  readonly type: typeof LOGIN_USER_ERROR
}

export interface IRegisterUserRequest {
  readonly type: typeof REGISTER_USER_REQUEST
}

export interface IRegisterUserSucces {
  readonly type: typeof REGISTER_USER_SUCCESS,
  readonly payload: TUser
}

export interface IRegisterUserError {
  readonly type: typeof REGISTER_USER_ERROR
}

export interface ILogoutUserRequest {
  readonly type: typeof LOGOUT_USER_REQUEST
}

export interface ILogoutUserSuccess {
  readonly type: typeof LOGOUT_USER_SUCCESS
}

export interface ILogoutUserError {
  readonly type: typeof LOGOUT_USER_ERROR
}

export interface IGetOrderFeedRequest {
  readonly type: typeof GET_ORDER_FEED_REQUEST
}

export interface IGetOrderFeedSuccess {
  readonly type: typeof GET_ORDER_FEED_SUCCESS,
  readonly payload: TOrder
}

export interface IGetOrderFeedError {
  readonly type: typeof GET_ORDER_FEED_ERROR,
}

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST,
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS,
  readonly payload: Array<TIngredient>
}

export interface IGetIngredientsError {
  readonly type: typeof GET_INGREDIENTS_ERROR,
}

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT,
  readonly payload: string
  key: string
}

export interface IAddBun {
  readonly type: typeof ADD_BUN,
  readonly payload: string
}

export interface IRemoveIngredient {
  readonly type: typeof REMOVE_INGREDIENT,
  readonly payload: TIngredient
}

export interface IReorderIngredients {
  readonly type: typeof REORDER_INGREDIENTS,
  readonly payload: {
    from: number,
    to: number
  }
}

export interface IOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST,
}

export interface IOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS,
  readonly payload: string
}

export interface IOrderError {
  readonly type: typeof GET_ORDER_ERROR,
}

export interface ICloseModal {
  readonly type: typeof CLOSE_ORDER_MODAL,
}

export interface IWsAction {
  type: string;
  payload: any;
  key?: string
}

export interface IUserWsConnectionStart {
  readonly type: typeof USER_WS_CONNECTION_START
}

export interface IUserWsConnectionClosed{
  readonly type: typeof USER_WS_CONNECTION_CLOSED
}

export interface IWsConnectionStart{
  readonly type: typeof WS_CONNECTION_START
}

export interface IWsConnectionClosed{
  readonly type: typeof WS_CONNECTION_CLOSED
}


export type TUnionAction =
  | IWsConnectionClosed
  | IWsConnectionStart
  | IUserWsConnectionClosed
  | IUserWsConnectionStart
  | IWsAction
  | ICloseModal
  | IOrderError
  | IOrderSuccess
  | IOrderRequest
  | IReorderIngredients
  | IRemoveIngredient
  | IAddBun
  | IAddIngredient
  | IGetIngredientsError  
  | IGetIngredientsSuccess
  | IGetIngredientsRequest
  | IGetUserRequest
  | IGetUserSucces
  | IGetUserError
  | ILoginUserRequest
  | ILoginUser
  | ILoginUserError
  | ILoginUserRequest
  | ILogoutUserError
  | ILogoutUserRequest
  | ILogoutUserSuccess
  | IRegisterUserError
  | IRegisterUserRequest
  | IRegisterUserSucces
  | IGetOrderFeedError
  | IGetOrderFeedRequest
  | IGetOrderFeedSuccess
