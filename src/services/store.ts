import { combineReducers } from "redux";
import { configureStore} from "@reduxjs/toolkit";

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

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});