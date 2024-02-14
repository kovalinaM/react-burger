import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import stylesHeader from "./app-header.module.css";

export default function AppHeader() {
  return (
    <header className={stylesHeader.header}>
      <nav>
        <ul className={stylesHeader.menu}>
          <li className="pt-4 pb-4 pr-5 pl-5">
            <a href="#" className={stylesHeader.link}>
              <BurgerIcon type="primary" />
              <span className="text text_type_main-default">Конструктор</span>
            </a>
          </li>
          <li className="pt-4 pb-4 pr-5 pl-5">
            <a href="#" className={stylesHeader.link}>
              <ListIcon type="secondary" />
              <span className="text text_type_main-default text_color_inactive">
                Лист заказов
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <Logo />
      <div>
          <div className="pt-4 pb-4 pr-5 pl-5">
            <a href="#" className={stylesHeader.link}>
              <ProfileIcon type="secondary" />
              <span className="text text_type_main-default text_color_inactive">
                Личный кабинет
              </span>
            </a>
          </div>
      </div>
    </header>
  );
}
