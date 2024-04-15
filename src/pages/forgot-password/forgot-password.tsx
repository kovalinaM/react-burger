import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/actions/forgot-password";

import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../register/register.module.css";
import { useIsAuthenticated } from "../../utils/selectors";
import { useForm } from "../../hocs/useForm";

const getForgotPasswordSuccess = (store: any) => store.auth.forgotPasswordSuccess;
const getForgotPasswordError = (store: any) => store.auth.forgotPasswordError;
export function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const forgotPasswordSuccess = useSelector(getForgotPasswordSuccess);
  const forgotPasswordError = useSelector(getForgotPasswordError);
  const isAuthenticated = useIsAuthenticated();

  const { values, handleChange } = useForm({
    email: "",
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
        //@ts-ignore
        forgotPassword(values)
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

  if (forgotPasswordSuccess) {
    return (
      <Navigate 
        to='/reset-password'
      />
    )
  } 

  return (
    <main className={styles.container}>
      <h2 className={`text text_type_main-medium`}>Восстановление пароля</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type={"email"}
            placeholder={"E-mail"}
            name={"email"}
            onChange={handleChange}
            value={values.email}
            error={forgotPasswordError}
          />
        </div>
        <Button htmlType="submit" type="primary" size="large">
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?
        <Link to="/login " className={styles.link}>
          {" "}
          Войти
        </Link>
      </p>
    </main>
  );
}
