import React from "react";
import {Link, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "../../services/types";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../register/register.module.css";

import {login} from "../../services/actions/login";
import {useIsAuthenticated} from "../../utils/selectors";
import { useForm } from "../../hocs/useForm";

export function LoginPage() {
  const isAuthenticated = useIsAuthenticated();
  const loginError = useSelector((store) => store.auth.loginError);
  const dispatch = useDispatch();

  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
        login(values)
    );
  }

  if (isAuthenticated) {
    return (
      <Navigate 
        to='/'
        replace
      />
    )
  } 

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type={"email"}
            placeholder={"E-mail"}
            name={"email"}
            onChange={handleChange}
            value={values.email}
            error={loginError}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={values.password}
            name={"password"}
            onChange={handleChange}
          />
        </div>
        <Button htmlType="submit" type="primary" size="large">
          Войти
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Вы — новый пользователь?
        <Link to="/register" className={styles.link}>
          {" "}
          Зарегистрироваться
        </Link>
      </p>

      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль?
        <Link to="/forgot-password" className={styles.link}>
          {" "}
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
}
