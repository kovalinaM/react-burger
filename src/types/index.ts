import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED_SUCCESS,
  WS_GET_USER_ORDERS,
  WS_CONNECTION_USER_ORDERS_START,
  WS_CONNECTION_USER_ORDERS_CLOSED,
    WS_CONNECTION_USER_ORDERS_ERROR,
    WS_CONNECTION_USER_ORDERS_SUCCESS,
    WS_CONNECTION_USER_ORDERS_CLOSED_SUCCESS
} from './../services/constants/index';


export type TIngredientsRequest = {
  success: boolean;
  data: TIngredient[]
}

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  count: number;
};

export type TIngredientConstructor = TIngredient & {
  uniqId: string;
};

export type TBun = TIngredient | null;

export type TString = {
  [name: string]: string;
};

export type TIngredientType = {
  [key: string]: {
    type: "bun" | "sauce" | "main";
    title: "Булки" | "Соусы" | "Начинки";
  };
};

export type TServerResponse<T> = {
  success: boolean;
} & T;

export type TUserResponse  = {
  user: {
    name: string;
    email: string;
    password: string;
  }
  refreshToken: string;
  accessToken: string
}

export type TRefreshTokenResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
}>;

export type TOrderNumber = {
  order: { 
    number: number 
  };
};

export type TProfileForm = {
  name: string;
  email: string;
  password: string;
};

export type TUserData = Pick<TProfileForm, 'name' | 'email'>

export type TRegisterForm = Pick<TProfileForm, "name" | "email" | "password">;
export type TLoginForm = Pick<TProfileForm, "email" | "password">;
export type TForgotPasswordForm = Pick<TProfileForm, "email">;
export type TResetPasswordForm = Pick<TProfileForm, "password"> & {
  token: string;
};

export type TOrder = {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number?: number;
};

export type TOrders = TOrder[];

export type TGetOrdersResponse = {
  success: boolean;
  orders: TOrders;
  total: number;
  totalToday: number;
}

export type TCorrectOrder = Omit<TOrder, 'ingredients'> & { ingredients: TIngredient[]};
export type TDoneInProgressOrders = {
  done: number[];
  inProgress: number[];
};

export type TWSOrderActions = {
  wsInit: typeof WS_CONNECTION_START | typeof WS_CONNECTION_USER_ORDERS_START,
  wsClose: typeof WS_CONNECTION_CLOSED | typeof WS_CONNECTION_USER_ORDERS_CLOSED,
  onClose: typeof WS_CONNECTION_CLOSED_SUCCESS | typeof WS_CONNECTION_USER_ORDERS_CLOSED_SUCCESS,
  onOpen: typeof WS_CONNECTION_SUCCESS | typeof WS_CONNECTION_USER_ORDERS_SUCCESS,
  onError: typeof WS_CONNECTION_ERROR | typeof WS_CONNECTION_USER_ORDERS_ERROR,
  onMessage: typeof WS_GET_ORDERS | typeof WS_GET_USER_ORDERS,
}

