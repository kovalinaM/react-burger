import {
    OPEN_INGREDIENT_MODAL,
    CLOSE_INGREDIENT_MODAL,
    SELECT_INGREDIENT,
    UNSELECT_INGREDIENT
} from "../actions/ingredient-details"

const initialState = {
    selectedIngredient: null,
    modalIsActive: false
}


export const ingredientDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: action.selectedIngredient
            }
        }
        case UNSELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: null
            }
        }
        case OPEN_INGREDIENT_MODAL: {
            return {
                ...state,
                modalIsActive: true
            }
        }
        case CLOSE_INGREDIENT_MODAL: {
            return {
                ...state,
                modalIsActive: false
            }
        }
        default: {
            return state;
        }
    }
}