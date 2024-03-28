import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-edit.module.css";

import { editProfile } from "../../services/actions/profile";
import { useForm } from "../../hocs/useForm";

const getUser = (store) => store.auth.user;

export function ProfileEdit() {
  const dispatch = useDispatch();

  const { name, email, password } = useSelector(getUser);

  const { values, handleChange, setValues } = useForm({
    name: name || "",
    email: email || "",
    password: password || "",
  });

  const isChanged = useMemo(() => {
    return (
      name !== values.name ||
      email !== values.email ||
      password !== values.password
    );
  }, [values, name, email, password]);

  function onCancel(e) {
    e.preventDefault();
    setValues({ name, email, password });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(editProfile(values));
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          onChange={handleChange}
          value={values.name}
          icon="EditIcon"
        />
      </div>
      <div className="mb-6">
        <Input
          type={"email"}
          placeholder={"Логин"}
          name={"email"}
          onChange={handleChange}
          value={values.email}
          icon="EditIcon"
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          type={"password"}
          value={values.password}
          name={"password"}
          onChange={handleChange}
          icon="EditIcon"
        />
      </div>
      {isChanged && (
        <div className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            size="large"
            onClick={onCancel}
          >
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="large">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}
