import { burgerConstructorReducer, initialState } from "./burger-constructor";
import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    SET_BUNS,
    MOVE_INGREDIENT,
    RESET_INGREDIENTS
} from '../constants';
import { mockConstructorIngredient, mockIngredientBun } from "../../utils/mock-data";

describe('burgerConstructorReducer', () => {
    it('should return the initial state', () => {
        expect(burgerConstructorReducer(undefined, {})).toEqual(initialState);
    });
    

    it('should handle ADD_INGREDIENT', () => {
        const action = {
            type: ADD_INGREDIENT,
            ingredient: mockConstructorIngredient,
        };
        expect(burgerConstructorReducer(undefined, action)).toEqual({
            ...initialState,
            ingredients: [ ...initialState.ingredients, action.ingredient]
        });
    });

    it('should handle DELETE_INGREDIENT', () => {
        const action = {
            type: DELETE_INGREDIENT,
            uniqId: mockConstructorIngredient.uniqId,
        };
        expect(burgerConstructorReducer({
            ...initialState,
            ingredients: [mockConstructorIngredient],
        }, action)).toEqual({
            ...initialState,
            ingredients: []
        });
    });

    it('should handle RESET_INGREDIENTS', () => {
        const action = {
            type: RESET_INGREDIENTS,
        };
        expect(burgerConstructorReducer({
            ...initialState,
            ingredients: [ mockIngredientBun],
        }, action)).toEqual({
            ...initialState,
            ingredients: [],
            bun: null
        });
    });
});