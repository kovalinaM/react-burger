import { useState, useMemo } from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-edit.module.css";

import {editProfile} from "../../services/actions/profile";

const getUser = store => store.auth.user;

export function ProfileEdit() {
  const dispatch = useDispatch();

  const { name, email, password } = useSelector(getUser);

  const [formValue, setFormValue] = useState({
    name: name || '',
    email: email || '',
    password: password || '',
  });

  const isChanged = useMemo(() => {
    return name !== formValue.name || email !== formValue.email || password !== formValue.password;
  }, [formValue, name, email, password]);

console.log(formValue);
  function onFormChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  function onCancel(e) {
    e.preventDefault();
    setFormValue({
      name, email, password,
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(editProfile(formValue));
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
          icon="EditIcon"
        />
      </div>
      <div className="mb-6">
        <Input
          type={"email"}
          placeholder={"Логин"}
          name={"email"}
          onChange={onFormChange}
          value={formValue.email}
          icon="EditIcon"
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          value={formValue.password}
          name={"password"}
          onChange={onFormChange}
          icon="EditIcon"
        />
      </div>
      {isChanged && (
      <div className={styles.buttons}>
        <Button type="secondary" size="large" onClick={onCancel}>
          Отмена
        </Button>
        <Button type="primary" size="large">
          Сохранить
        </Button>
      </div>
      )}
    </form>
  );
}
