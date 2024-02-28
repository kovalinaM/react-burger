import { combineReducers } from 'redux';
import {ingridientsReducer} from './ingredients';
import {burgerConstructorReducer} from './burger-constructor';
import {ingredientDetailsReducer} from './ingredient-details';
import {orderReducer} from './order'

export const rootReducer = combineReducers({
    ingredients: ingridientsReducer,
    burderConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer
});