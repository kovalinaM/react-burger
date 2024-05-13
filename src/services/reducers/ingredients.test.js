import{ ingridientsReducer, initialState } from "./ingredients";
import {
    INGREDIENTS_GET_REQUEST,
    INGREDIENTS_GET_SUCCESS,
    INGREDIENTS_GET_FAILED,
    INCREASE_INGREDIENT,
    RESET_COUNT_INGREDIENT,
    DECREASE_INGREDIENT,
    CHANGE_BUNS,
    TAB_SWITCH,
} from "../constants";
import { mockIngredientBun, mockIngredientBun2, mockIngredients, mockIngredient } from "../../utils/mock-data";

describe('ingredientsReducer',() => {
    it('should return the initial state', () => {
        expect(ingridientsReducer(undefined, {})).toEqual({
            ...initialState,
        });
    });

    it('should handle INGREDIENTS_GET_REQUEST', () => {
        const action = {
            type: INGREDIENTS_GET_REQUEST,
        };
        expect(ingridientsReducer(undefined, action)).toEqual({
            ...initialState,
            ingredientsLoading: true,
        });
    });

    it('should handle INGREDIENTS_GET_SUCCESS', () => {
        const action = {
            type: INGREDIENTS_GET_SUCCESS,
            ingredients: mockIngredients,
        };
        expect(ingridientsReducer(undefined, action)).toEqual({
            ...initialState,
            ingredients: action.ingredients,
            ingredientsLoading: false,
            ingredientsFailed: false,
        });
    });

    it('should handle INGREDIENTS_GET_FAILED', () => {
        const action = {
            type: INGREDIENTS_GET_FAILED,
        };
        expect(ingridientsReducer(undefined, action)).toEqual({
            ...initialState,
            ingredients: [],
            ingredientsLoading: false,
            ingredientsFailed: true,
        });
    });

    it('should handle CHANGE_BUNS', () => {
        const action = {
            type: CHANGE_BUNS,
            _id: mockIngredientBun2._id,
        };
        expect(ingridientsReducer({
            ...initialState,
            ingredients: [{ ...mockIngredientBun, count: 2}, mockIngredientBun2]
        }, action)).toEqual({
            ...initialState,
            ingredients: [{...mockIngredientBun, count: 0}, { ...mockIngredientBun2, count: 2 }]
        });
    });

    it('should handle INCREASE_INGREDIENT', () => {
        const action = {
            type: INCREASE_INGREDIENT,
            _id: mockIngredient._id,
        };
        expect(ingridientsReducer({
            ...initialState,
            ingredients: [mockIngredientBun, mockIngredient]
        }, action)).toEqual({
            ...initialState,
            ingredients: [mockIngredientBun, { ...mockIngredient, count: mockIngredient.count + 1 }],
        });
    });

    it('should handle DECREASE_INGREDIENT', () => {
        const action = {
            type: DECREASE_INGREDIENT,
            _id: mockIngredient._id,
        };
        expect(ingridientsReducer({
            ...initialState,
            ingredients: [mockIngredient, mockIngredientBun]
        }, action)).toEqual({
            ...initialState,
            ingredients: [{ ...mockIngredient, count: mockIngredient.count - 1 }, mockIngredientBun],
        });
    });

    it('should handle RESET_COUNT_INGREDIENT', () => {
        const action = {
            type: RESET_COUNT_INGREDIENT,
        };
        expect(ingridientsReducer({
            ...initialState,
            ingredients: [mockIngredient, mockIngredientBun]
        }, action)).toEqual({
            ...initialState,
            ingredients: [{ ...mockIngredient, count: 0 }, { ...mockIngredientBun, count: 0 }],
        });
    });

    it('should handle TAB_SWITCH', () => {
        const action = {
            type: TAB_SWITCH,
            currentTab: 'tab',
        };
        expect(ingridientsReducer(undefined, action)).toEqual({
            ...initialState,
            currentTab: action.currentTab,
        });
    });
});