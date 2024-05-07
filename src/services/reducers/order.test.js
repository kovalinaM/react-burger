import { orderReducer, initialState } from './order';
import {
    OPEN_ORDER_MODAL,
    CLOSE_ORDER_MODAL,
    ORDER_POST_REQUEST,
    ORDER_POST_SUCCESS,
    ORDER_POST_FAILED
} from '../constants';

describe('orderDetailsReducer', () => {
    it('should return the initial state', () => {
        expect(orderReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ORDER_POST_REQUEST', () => {
        const action = {
            type: ORDER_POST_REQUEST,
        };
        expect(orderReducer(undefined, action)).toEqual({
            ...initialState,
            isLoading: true,
        });
    });

    it('should handle ORDER_POST_SUCCESS', () => {
        const action = {
            type: ORDER_POST_SUCCESS,
            orderId: '12345',
        };
        expect(orderReducer(undefined, action)).toEqual({
            ...initialState,
            isLoading: false,
            error: false,
            orderId: '12345',
        });
    });

    it('should handle ORDER_POST_FAILED', () => {
        const action = {
            type: ORDER_POST_FAILED,
        };
        expect(orderReducer(undefined, action)).toEqual({
            ...initialState,
            isLoading: false,
            error: true,
        });
    });

    it('should handle OPEN_ORDER_MODAL', () => {
        const action = {
            type: OPEN_ORDER_MODAL,
        };
        expect(orderReducer(undefined, action)).toEqual({
            ...initialState,
            modalIsActive: true,
        });
    });

    it('should handle CLOSE_ORDER_MODAL', () => {
        const action = {
            type: CLOSE_ORDER_MODAL,
        };
        expect(orderReducer(undefined, action)).toEqual({
            ...initialState,
            modalIsActive: false,
        });
    });
});