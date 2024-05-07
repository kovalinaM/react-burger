import { feedReducer, initialState } from "./feed"
import {
    SELECT_ORDER,
    SET_CORRECT_ORDERS,
    UNSELECT_ORDER
} from "../constants";
import { mockWSCorrectOrder } from "../../utils/mock-data";

describe('feedReducer', () => {
    it('should return the initial state', () => {
        expect(feedReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_CORRECT_ORDERS', () => {
        const action = {
            type: SET_CORRECT_ORDERS,
            payload: [mockWSCorrectOrder],
        };
        expect(feedReducer(undefined, action)).toEqual({
            ...initialState,
            orders: [mockWSCorrectOrder],
        });
    });


    it('should handle SELECT_ORDER', () => {
        const action = {
            type: SELECT_ORDER,
            payload: mockWSCorrectOrder,
        };
        expect(feedReducer(undefined, action)).toEqual({
            ...initialState,
            selectedOrder: mockWSCorrectOrder,
        });
    });

    it('should handle UNSELECT_ORDER', () => {
        const action = {
            type: UNSELECT_ORDER,
        };
        expect(feedReducer(undefined, action)).toEqual({
            ...initialState,
            selectedOrder: null,
        });
    });
});