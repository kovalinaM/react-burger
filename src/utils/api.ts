import { IFormEntryData } from '../hocs/useForm';
import { TIngredientsRequest } from './../types';
import { BASE_URL, ENDPOINT } from "./constants";
import {
  TServerResponse,
  TRefreshTokenResponse,
  TUserResponse,
  TOrderNumber,
  TForgotPasswordForm, 
  TIngredientConstructor,
  TLoginForm,
  TProfileForm,
  TRegisterForm,
  TResetPasswordForm
} from "./types";


export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredients(): Promise<TServerResponse<TIngredientsRequest>> {
  return fetch(BASE_URL + ENDPOINT.INGREDIENTS).then<TServerResponse<TIngredientsRequest>>(checkResponse);
}

export const postOrder = (ingredients : TIngredientConstructor[]): Promise<TServerResponse<TOrderNumber>> => {
  return fetch(BASE_URL + ENDPOINT.ORDERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  }).then<TServerResponse<TOrderNumber>>(checkResponse);
};

export const registerRequest = ({ name, email, password }: IFormEntryData) => {
  return fetch(BASE_URL + ENDPOINT.REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const loginRequest = ({ email, password }: IFormEntryData): Promise<TServerResponse<TUserResponse>> => {
  return fetch(BASE_URL + ENDPOINT.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then<TServerResponse<TUserResponse>>(checkResponse);
};

export const getUserRequest = (): Promise<TUserResponse> => {
  const accessToken = localStorage.getItem("accessToken");
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers.Authorization = accessToken;
  }

  return fetchWithRefresh<TUserResponse>(BASE_URL + ENDPOINT.USER, {
    method: "GET",
    headers
  });
};

export const updateUserRequest = ({ name, email, password }: IFormEntryData): Promise<TUserResponse> => {
  const accessToken = localStorage.getItem("accessToken");
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers.Authorization = accessToken;
  }

  return fetchWithRefresh(BASE_URL + ENDPOINT.USER, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ name, email, password }),
  });
};

export const forgotPasswordRequest = ({ email }: IFormEntryData) => {
  return fetch(BASE_URL + ENDPOINT.FORGOT_PASSWORD, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse);
};


export const resetPasswordRequest = ({ token, password }: TResetPasswordForm) => {
  return fetch(BASE_URL + ENDPOINT.RESET_PASSWORD, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, password }),
  }).then(checkResponse);
};

export const refreshTokenRequest = (): Promise<TRefreshTokenResponse> => {
  return fetch(BASE_URL + ENDPOINT.REFRESH_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  })
    .then(checkResponse<TRefreshTokenResponse>)
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      return refreshData;
    });
};

export const fetchWithRefresh = async <T>(url: string, options: RequestInit): Promise<T> => {
  try {
    const res = await fetch(url, options);
    return await checkResponse<T>(res);
  } catch (err) {
    if ((err as {message: string }).message === "jwt expired") {
      const refreshData = await refreshTokenRequest(); //обновляем токен
      const updatedOptions: RequestInit = {
        ...options,
        headers: {
          ...options.headers,
          authorization: refreshData.accessToken,
        },
      };
      const res = await fetch(url, updatedOptions); //повторяем запрос
      return await checkResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const logoutRequest = () => {
  return fetch(BASE_URL + ENDPOINT.LOGOUT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then(checkResponse);
};
