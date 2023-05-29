import { store } from "../services/store";
import { ThunkAction } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { TUnionAction } from "../services/actions/interfaces";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, never, TUnionAction>
>;

export type TIngredient = {
  readonly _id?: string,
  readonly id?: string,
  readonly name: string,
  readonly type: string,
  readonly proteins: number,
  readonly fat: number,
  readonly carbohydrates: number,
  readonly calories: number,
  readonly price: number,
  readonly image: string,
  readonly image_mobile: string,
  readonly image_large: string,
  readonly __v: number,
  key?: string
}

export type TConstructorIngredient = {
  item: TIngredient,
  index: number
};

export type TIngredients = TIngredient[];

export type TLogin = {
  email: string;
  password: string;
}

export type TRegister = TLogin & {
  name: string;
}

export type WebSocketEvent = Event & {
  data?: string;
};

export type WebSocketMessage = {
  success: boolean;
  [key: string]: any;
};

export interface IInitialStateStringBool {
  [name: string]: boolean;
}

export interface IWsState {
  wsConnected: boolean;
  orders: IWsObj[];
  error: any;
  total: number,
  totalToday: number
}

export type IWsObj = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export interface IWsAction {
  type: string;
  payload: any;
}

export interface IAction {
  type: string;
  payload?: any;
}

export type TOrder = {
  ingredients: Array<string>,
  _id: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string,
  name: string,
  key?: string,
}

export type TOrders = {
  success: boolean,
  orders: Array<IWsObj>,
  total: number,
  totalToday: number
}

export type TUserOrders = {
  success: boolean,
  orders: Array<IWsObj>
}

export type TUser = {
  isAuthenticated: boolean,
  isLoading: boolean,
  isError: boolean,
  user: {
    name: string,
    email: string,
  }
}

export type TWSActions = {
  readonly wsInit: string
  readonly onOpen: string
  readonly onClose: string
  readonly onError: string
  readonly onMessage: string
};