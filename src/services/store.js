import { combineReducers } from "redux";
import { applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { ingridientsReducer } from "./reducers/ingredients";
import { burgerConstructorReducer } from "./reducers/burger-constructor";
import { ingredientDetailsReducer } from "./reducers/ingredient-details";
import { orderReducer } from "./reducers/order";

export const rootReducer = combineReducers({
    ingredients: ingridientsReducer,
    burderConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = configureStore({ reducer: rootReducer, enhancer });
