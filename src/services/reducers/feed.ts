import {SELECT_ORDER, SET_CORRECT_ORDERS, SET_DONE_ORDERS, UNSELECT_ORDER} from "../constants";
import { TCorrectOrder } from "../../types";
import { TFeedActions } from "../actions/feed";

type TFeedState = {
    orders: TCorrectOrder[],
    selectedOrder: TCorrectOrder | null;
    done: number[];
    inProgress: number[];
  }
  
  const initialState: TFeedState = {
    orders: [],
    selectedOrder: null,
    done: [],
    inProgress: [],
  };
  
  export const feedReducer = (state = initialState, action: TFeedActions) => {
    switch (action.type) {
      case SET_CORRECT_ORDERS: {
        return {
          ...state,
          orders: action.payload,
        };
      }
      case SET_DONE_ORDERS: {
        return {
          ...state,
          done: action.payload.done,
          inProgress: action.payload.inProgress,
        }
      }
      case SELECT_ORDER: {
        return {
          ...state,
          selectedOrder: action.payload,
        };
      }
      case UNSELECT_ORDER: {
        return {
          ...state,
          selectedOrder: null,
        }
      }
      default: {
        return state;
      }
    }
  };