import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/actions/forgot-password";


import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../register/register.module.css";

export function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const { isAuthenticated, forgotPasswordSuccess, forgotPasswordError} = useSelector(state => state.auth);

  const [formValue, setFormValue] = useState({
    email: "",
  });

  function onFormChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(forgotPassword(formValue));
  }

  if (forgotPasswordSuccess) {
    return (
      <Navigate 
        to='/reset-password'
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
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type={"email"}
            placeholder={"E-mail"}
            name={"email"}
            onChange={onFormChange}
            value={formValue.email}
            error={forgotPasswordError}
          />
        </div>
        <Button type="primary" size="large">
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
