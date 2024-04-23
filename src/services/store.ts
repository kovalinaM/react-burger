import { combineReducers } from "redux";
import { applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { ingridientsReducer } from "./reducers/ingredients";
import { burgerConstructorReducer } from "./reducers/burger-constructor";
import { ingredientDetailsReducer } from "./reducers/ingredient-details";
import { orderReducer } from "./reducers/order";
import { AuthReducer } from "./reducers/auth";

export const rootReducer = combineReducers({
    ingredients: ingridientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer,
    auth: AuthReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = configureStore({ reducer: rootReducer, enhancer});
