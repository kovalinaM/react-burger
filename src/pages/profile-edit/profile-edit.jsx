import { useState } from "react";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-edit.module.css";

export function ProfileEdit() {
  const [formValue, setFormValue] = useState({
    name: "Марк",
    email: "mail@stellar.burgers",
    password: "12345",
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
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"Имя"}
          onChange={onFormChange}
          value={formValue.name}
          icon={"EditIcon"}
        />
      </div>
      <div className="mb-6">
        <Input
          type={"email"}
          placeholder={"Логин"}
          name={"E-mail"}
          onChange={onFormChange}
          value={formValue.email}
          icon={"EditIcon"}
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          value={formValue.password}
          name={"Пароль"}
          onChange={onFormChange}
          icon={"EditIcon"}
        />
      </div>
      <div className={styles.buttons}>
        <Button type="secondary" size="large">
          Отмена
        </Button>
        <Button type="primary" size="large">
          Сохранить
        </Button>
      </div>
    </form>
  );
}
