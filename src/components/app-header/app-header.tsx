import React, {FC} from "react";
import { useSelector } from "../../services/types";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useLocation } from "react-router-dom";

import stylesHeader from "./app-header.module.css";


const AppHeader: FC = () => {
  const location = useLocation();
  const userName = useSelector((store) => store.auth.user.name);
  return (
    <header className={stylesHeader.header}>
      <nav>
        <ul className={stylesHeader.menu}>
          <li className="pt-4 pb-4 pr-5 pl-5">
            <NavLink to={"/"} className={stylesHeader.link}>
              <BurgerIcon type={location.pathname === "/" ? "primary" : "secondary"}/>
              <span className={`text text_type_main-default ${location.pathname === "/" ? "" : "text_color_inactive"}`}>Конструктор</span>
            </NavLink>
          </li>
          <li className="pt-4 pb-4 pr-5 pl-5">
            <NavLink to={"/orders"} className={stylesHeader.link}>
              <ListIcon type={location.pathname === "/orders" ? "primary" : "secondary"} />
              <span className={`text text_type_main-default ${location.pathname === "/orders" ? "" : "text_color_inactive"}`}>
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
            <span className={`text text_type_main-default ${location.pathname === "/profile" || location.pathname === "/profile/orders" ? "" : "text_color_inactive"}`}>
              {!!userName ? userName : 'Личный кабинет'}
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
