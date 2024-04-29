import { WS_CONNECTION_START, WS_CONNECTION_CLOSED, WS_CONNECTION_CLOSED_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_ORDERS } from './constants/index';
import { combineReducers } from "redux";
import { configureStore} from "@reduxjs/toolkit";

import { ingridientsReducer } from "./reducers/ingredients";
import { burgerConstructorReducer } from "./reducers/burger-constructor";
import { ingredientDetailsReducer } from "./reducers/ingredient-details";
import { orderReducer } from "./reducers/order";
import { AuthReducer } from "./reducers/auth";
import { wsReducer } from "./reducers/ws-orders";
import {feedReducer} from "./reducers/feed";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { TWSOrderActions } from "../types";



export const rootReducer = combineReducers({
    ingredients: ingridientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer,
    auth: AuthReducer,
    ws: wsReducer,
    feed: feedReducer,
});

const wsActions: TWSOrderActions = {
    wsInit: WS_CONNECTION_START,
    wsClose: WS_CONNECTION_CLOSED,
    onClose: WS_CONNECTION_CLOSED_SUCCESS,
    onOpen: WS_CONNECTION_SUCCESS,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_ORDERS
};

const ordersMiddleware = socketMiddleware(wsActions);

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ordersMiddleware),
});