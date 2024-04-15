import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../services/actions/register";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";
import { useIsAuthenticated } from "../../utils/selectors";
import { useForm } from "../../hocs/useForm";

export function RegisterPage() {
  const isAuthenticated =  useIsAuthenticated();
  const dispatch = useDispatch();

  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
        //@ts-ignore
        register(values)
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
    <main className={styles.container}>
      <h2 className={`text text_type_main-medium`}>Регистрация</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            name={"name"}
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"email"}
            placeholder={"E-mail"}
            name={"email"}
            onChange={handleChange}
            value={values.email}
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
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Уже зарегистрированы?
        <Link to="/login " className={styles.link}>
          {" "}
          Войти
        </Link>
      </p>
    </main>
  );
}
