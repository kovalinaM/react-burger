import { BASE_URL, ENDPOINT } from "./constants";

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredients() {
  return fetch(BASE_URL + ENDPOINT.INGREDIENTS).then(checkResponse);
}

export const postOrder = ({ ingredients }) => {
  return fetch(BASE_URL + ENDPOINT.ORDERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse);
};

export const registerRequest = ({ name, email, password }) => {
  return fetch(BASE_URL + ENDPOINT.REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const loginRequest = ({ email, password }) => {
  return fetch(BASE_URL + ENDPOINT.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const getUser = () => {
  return fetchWithRefresh(BASE_URL + ENDPOINT.USER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
  }).then(checkResponse);
};

export const updateUser = ({ name, email, password }) => {
  return fetchWithRefresh(BASE_URL + ENDPOINT.USER, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const forgotPassword = ({ email }) => {
  return fetch(BASE_URL + ENDPOINT.FORGOT_PASSWORD, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse);
};

export const resetPassword = ({ token, password }) => {
  return fetch(BASE_URL + ENDPOINT.RESET_PASSWORD, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, password }),
  }).then(checkResponse);
};

export const refreshToken = () => {
  return fetch(BASE_URL + ENDPOINT.REFRESH_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  })
    .then(checkResponse)
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      return refreshData;
    });
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const logout = () => {
  return fetch(BASE_URL + ENDPOINT.LOGOUT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then(checkResponse);
};
