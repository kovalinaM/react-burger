import {
    OPEN_INGREDIENT_MODAL,
    CLOSE_INGREDIENT_MODAL,
    SELECT_INGREDIENT,
    UNSELECT_INGREDIENT
} from "../constants"
import {TIngredientDetailsActions} from "../actions/ingredient-details"
import { TIngredient } from "../../types"

export type TIngredientDetailsState = {
    selectedIngredient: TIngredient | null;
    modalIsActive: boolean; 
}

const ingredientDetailsInitialState: TIngredientDetailsState = {
    selectedIngredient: null,
    modalIsActive: false
}


export const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action: TIngredientDetailsActions) => {
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