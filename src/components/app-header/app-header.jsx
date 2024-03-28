import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useLocation } from "react-router-dom";

import stylesHeader from "./app-header.module.css";

export default function AppHeader() {
  const location = useLocation();

  return (
    <header className={stylesHeader.header}>
      <nav>
        <ul className={stylesHeader.menu}>
          <li className="pt-4 pb-4 pr-5 pl-5">
            <NavLink to={"/"} className={stylesHeader.link}>
              <BurgerIcon type={location.pathname === "/" ? "primary" : "secondary"}/>
              <span className={`text text_type_main-defaul ${location.pathname === "/" ? "" : "text_color_inactive"}`}>Конструктор</span>
            </NavLink>
          </li>
          <li className="pt-4 pb-4 pr-5 pl-5">
            <NavLink to={"/orders"} className={stylesHeader.link}>
              <ListIcon type={location.pathname === "/orders" ? "primary" : "secondary"} />
              <span className={`text text_type_main-defaul ${location.pathname === "/orders" ? "" : "text_color_inactive"}`}>
                Лист заказов
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
      <div>
        <div className="pt-4 pb-4 pr-5 pl-5">
          <NavLink to={"/profile"} className={stylesHeader.link}>
            <ProfileIcon type={location.pathname === "/profile" || location.pathname === "/profile/orders" ? "primary" : "secondary"}/>
            <span className={`text text_type_main-defaul ${location.pathname === "/profile" || location.pathname === "/profile/orders" ? "" : "text_color_inactive"}`}>
              Личный кабинет
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
