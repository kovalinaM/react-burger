import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/types";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../register/register.module.css";

import { resetPassword } from "../../services/actions/reset-password";
import { useIsAuthenticated } from "../../utils/selectors";
import { useForm } from "../../hocs/useForm";

const getForgotPasswordSuccess = ( store: any ) => store.auth.forgotPasswordSuccess;
const getResetPasswordError = ( store: any ) => store.auth.resetPasswordError
export function ResetPasswordPage() {
  const forgotPasswordSuccess = useSelector(getForgotPasswordSuccess);
  const isAuthenticated = useIsAuthenticated();
  const resetPasswordError = useSelector(getResetPasswordError);
  const [ isPassword, setIsPassword ] = useState(true);

  const dispatch = useDispatch();

  const { values, handleChange } = useForm({
    password: "",
    token: ""
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
        resetPassword(values)
    );
  }

  function onIconClick() {
    setIsPassword(!isPassword);
  }

  if (!forgotPasswordSuccess && !isAuthenticated) {
    return (
      <Navigate
        to='/forgot-password'
      />
    )
  } else if (isAuthenticated) {
    return (
      <Navigate
        to='/'
      />
    )
  }

  return (
    <main className={styles.container}>
      <h2 className={`text text_type_main-medium`}>Восстановление пароля</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <PasswordInput
            value={values.password}
            name={"password"}
            onChange={handleChange}
            onClick={onIconClick}
            onError={resetPasswordError}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Ведите код из письма"}
            name={"token"}
            value={values.token}
            onChange={handleChange}
            error={resetPasswordError}
          />
        </div>
        <Button htmlType="submit" type="primary" size="large">
          Сохранить
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
