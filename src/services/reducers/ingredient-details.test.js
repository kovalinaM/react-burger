import {
    ingredientDetailsReducer,
    ingredientDetailsInitialState,
} from "./ingredient-details";

import {
    OPEN_INGREDIENT_MODAL,
    CLOSE_INGREDIENT_MODAL,
    SELECT_INGREDIENT,
    UNSELECT_INGREDIENT,
} from "../constants";

import { mockIngredientBun } from "../../utils/mock-data";

describe("ingredientDetailsReducer", () => {
    it("should return the initial state", () => {
        expect(ingredientDetailsReducer(undefined, {})).toEqual(
            ingredientDetailsInitialState
        );
    });

    it("should handle SELECT_INGREDIENT", () => {
        const action = {
            type: SELECT_INGREDIENT,
            selectedIngredient:  mockIngredientBun,
        };
        expect(ingredientDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            selectedIngredient:  mockIngredientBun,
        });
    });

    it("should handle UNSELECT_INGREDIENT", () => {
        const action = {
            type: UNSELECT_INGREDIENT,
        };
        expect(ingredientDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            selectedIngredient: null,
        });
    });

    it("should handle OPEN_INGREDIENT_DETAILS_MODAL", () => {
        const action = {
            type: OPEN_INGREDIENT_MODAL,
        };
        expect(ingredientDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            modalIsActive: true,
        });
    });

    it("should handle CLOSE_INGREDIENT_DETAILS_MODAL", () => {
        const action = {
            type: CLOSE_INGREDIENT_MODAL,
        };
        expect(ingredientDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            modalIsActive: false,
        });
    });
});
