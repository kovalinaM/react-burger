import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../register/register.module.css";

export function ResetPasswordPage() {
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
  }

  return (
    <main className={styles.container}>
      <h2 className={`text text_type_main-medium`}>Восстановление пароля</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <PasswordInput
            value={formValue.password}
            name={"Пароль"}
            onChange={onFormChange}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Ведите код из письма"}
            name={"Code"}
            onChange={onFormChange}
            value={formValue.email}
          />
        </div>
        <Button type="primary" size="large">
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
