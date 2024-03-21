import { useState } from "react";
import {useSelector} from "react-redux";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-edit.module.css";

const getUser = state => state.auth.user;

export function ProfileEdit() {
  const { name, email, password } = useSelector(getUser);

  const [formValue, setFormValue] = useState({
    name: name,
    email: email,
    password: password,
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
          name={"name"}
          onChange={onFormChange}
          value={formValue.name}
          icon={"EditIcon"}
        />
      </div>
      <div className="mb-6">
        <Input
          type={"email"}
          placeholder={"Логин"}
          name={"email"}
          onChange={onFormChange}
          value={formValue.email}
          icon={"EditIcon"}
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          value={formValue.password}
          name={"password"}
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
