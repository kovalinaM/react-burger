import {TIngredientType, TString} from "./types";

export const BASE_URL: string = "https://norma.nomoreparties.space/api";
export const WS_ALL_ORDERS_URL: string = 'wss://norma.nomoreparties.space/orders/all';
export const WS_USER_ORDERS_URL: string = 'wss://norma.nomoreparties.space/orders';

export const ENDPOINT: TString = {
    INGREDIENTS: '/ingredients',
    ORDERS: '/orders',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/password-reset',
    RESET_PASSWORD: '/password-reset/reset',
    USER: '/auth/user',
    REFRESH_TOKEN: '/auth/token',
    LOGOUT: '/auth/logout',
};

export const INGREDIENTS_TYPES: TIngredientType = {
    BUN: {
        type: "bun",
        title: "Булки",
    },
    SAUCE: {
        type: "sauce",
        title: "Соусы",
    },
    MAIN: {
        type: "main",
        title: "Начинки",
    },
};


