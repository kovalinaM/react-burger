import {useState} from "react";
import { Link } from "react-router-dom";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../register/register.module.css"

export function LoginPage() {
    const [formValue, setFormValue] = useState({
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
      }
    return (
        <div className={styles.container}>
        <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className="mb-6">
            <Input
              type={"email"}
              placeholder={"E-mail"}
              name={"E-mail"}
              onChange={onFormChange}
              value={formValue.email}
            />
          </div>
          <div className="mb-6">
            <PasswordInput
              value={formValue.password}
              name={"Пароль"}
              onChange={onFormChange}
            />
          </div>
          <Button type="primary" size="large">Войти</Button>
        </form>
  
        <p className="text text_type_main-default text_color_inactive mt-20">Вы — новый пользователь?
          <Link to="/register" className={styles.link}> Зарегистрироваться</Link>
        </p>
  
        <p className="text text_type_main-default text_color_inactive mt-4">Забыли пароль?
          <Link to="/" className={styles.link}> Восстановить пароль</Link>
        </p>
      </div>
    )
}