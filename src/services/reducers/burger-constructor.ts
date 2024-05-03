import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    SET_BUNS,
    MOVE_INGREDIENT,
    RESET_INGREDIENTS
} from '../constants'

import { TBurgerConstructorActions } from '../actions/burger-constructor';
import { TBun, TIngredientConstructor } from '../../types';

type TBurgerConstructorState = {
    ingredients: TIngredientConstructor[];
    bun: TBun;
};

const initialState: TBurgerConstructorState = {
    bun: null,
    ingredients: []
}


export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions) => {
    switch(action.type) {
        case ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: [ ...state.ingredients, action.ingredient]
            }
        case DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients].filter((ingredient) => ingredient.uniqId !== action.uniqId)
            }
        case SET_BUNS:
            return {
                ...state,
                bun: action.bun
            }
        case MOVE_INGREDIENT:
            const sortedIngredients = [...state.ingredients];
            [ sortedIngredients[action.dragIndex], sortedIngredients[action.hoverIndex] ] = [ sortedIngredients[action.hoverIndex], sortedIngredients[action.dragIndex] ];
            return {
                ...state,
                ingredients: sortedIngredients
            }
        case RESET_INGREDIENTS:
            return {
                ...state,
                ingredients: [],
                bun: null
            }
        default: 
            return state;
    }
}