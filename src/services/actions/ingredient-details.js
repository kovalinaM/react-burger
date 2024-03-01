export const OPEN_INGREDIENT_MODAL = 'OPEN_INGREDIENT_MODAL';
export const CLOSE_INGREDIENT_MODAL = 'CLOSE_INGREDIENT_MODAL';

export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const UNSELECT_INGREDIENT = 'UNSELECT_INGREDIENT';


export function selectIngredient(ingredient) {
    return {
        type: SELECT_INGREDIENT,
        selectIngredient: ingredient
    }
}