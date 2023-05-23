export type TIngredient = {
  readonly _id: string,
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
  orders: {
    orders: IWsObj[];
  };
  error: any;
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