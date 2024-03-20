import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../services/actions/register";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";

export function RegisterPage() {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  function onFormChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(register(formValue));
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
            onChange={onFormChange}
            value={formValue.name}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"email"}
            placeholder={"E-mail"}
            name={"email"}
            onChange={onFormChange}
            value={formValue.email}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={formValue.password}
            name={"password"}
            onChange={onFormChange}
          />
        </div>
        <Button type="primary" size="large">
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
