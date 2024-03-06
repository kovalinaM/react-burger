import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    SET_BUNS,
    MOVE_INGREDIENT
} from '../actions/burger-constructor'

const initialState = {
    bun: null,
    ingredients: []
}


export const burgerConstructorReducer = (state = initialState, action) => {
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
        default: 
            return state;
    }
}