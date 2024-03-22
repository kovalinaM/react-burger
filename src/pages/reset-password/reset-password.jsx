import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../register/register.module.css";

import { resetPassword } from "../../services/actions/reset-password";

export function ResetPasswordPage() {
  const { forgotPasswordSuccess } = useSelector(state => state.auth);

  const { isAuthenticated, resetPasswordSuccess, resetPasswordError } = useSelector(state => state.auth);
  const [ isPassword, setIsPassword ] = useState(true);

  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    password: "",
    token: ""
  });

  function onFormChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(resetPassword(formValue));
  }

  function onIconClick() {
    setIsPassword(!isPassword);
  }

  if (resetPasswordSuccess || !forgotPasswordSuccess) {
    return (
      <Navigate
        to='/login'
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
            value={formValue.password}
            name={"password"}
            onChange={onFormChange}
            onIconClick={onIconClick}
            error={resetPasswordError}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Ведите код из письма"}
            name={"token"}
            value={formValue.token}
            onChange={onFormChange}
            error={resetPasswordError}
          />
        </div>
        <Button htmlType="button" type="primary" size="large">
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
