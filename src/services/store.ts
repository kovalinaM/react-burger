import {
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_CLOSED_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS,
} from "./constants";
import {
    WS_CONNECTION_USER_ORDERS_START,
    WS_CONNECTION_USER_ORDERS_CLOSED,
    WS_CONNECTION_USER_ORDERS_CLOSED_SUCCESS,
    WS_CONNECTION_USER_ORDERS_ERROR,
    WS_CONNECTION_USER_ORDERS_SUCCESS,
    WS_GET_USER_ORDERS,
} from "./constants";
import { combineReducers } from "redux";
import { configureStore} from "@reduxjs/toolkit";

import { ingridientsReducer } from "./reducers/ingredients";
import { burgerConstructorReducer } from "./reducers/burger-constructor";
import { ingredientDetailsReducer } from "./reducers/ingredient-details";
import { orderReducer } from "./reducers/order";
import { AuthReducer } from "./reducers/auth";
import { wsReducer } from "./reducers/ws-orders";
import { feedReducer } from "./reducers/feed";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { TWSOrderActions } from "../types";
import { wsUserOrdersReducer } from "./reducers/ws-user-orders";



export const rootReducer = combineReducers({
    ingredients: ingridientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer,
    auth: AuthReducer,
    ws: wsReducer,
    feed: feedReducer,
    userOrders: wsUserOrdersReducer
});

const wsActions: TWSOrderActions = {
    wsInit: WS_CONNECTION_START,
    wsClose: WS_CONNECTION_CLOSED,
    onClose: WS_CONNECTION_CLOSED_SUCCESS,
    onOpen: WS_CONNECTION_SUCCESS,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_ORDERS
};

const wsUserOrderActions: TWSOrderActions  = {
    wsInit:WS_CONNECTION_USER_ORDERS_START,
    wsClose: WS_CONNECTION_USER_ORDERS_CLOSED,
    onClose: WS_CONNECTION_USER_ORDERS_CLOSED_SUCCESS,
    onOpen: WS_CONNECTION_USER_ORDERS_SUCCESS,
    onError: WS_CONNECTION_USER_ORDERS_ERROR,
    onMessage: WS_GET_USER_ORDERS
};

const ordersMiddleware = socketMiddleware(wsActions);
const userOrdersMiddleware = socketMiddleware(wsUserOrderActions);

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ordersMiddleware,userOrdersMiddleware),
});