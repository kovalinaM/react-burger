import { NavLink, useLocation, Outlet } from "react-router-dom";
import styles from "./profile.module.css";

export function ProfilePage() {
  const { pathname } = useLocation();

  return (
    <main className={`${styles.container} pt-30`}>
      <aside className={styles.sidebar}>
        <nav>
          <ul className={styles.menu}>
            <li className="text text_type_main-medium">
              <NavLink
                to={`/profile`}
                className={` ${
                    pathname === "/profile" ? "" : "text_color_inactive"
                  }`}
              >
                Профиль
              </NavLink>
            </li>
            <li className="text text_type_main-medium">
              <NavLink
                to={`/profile/orders`}
                className={`${
                    pathname === "/profile/orders" ? "" : "text_color_inactive"
                  }`}
              >
                История заказов
              </NavLink>
            </li>
            <li className="text text_type_main-medium text_color_inactive">
              Выход
            </li>
          </ul>
        </nav>
        {pathname === "/profile" ? (
          <p className="text text_type_main-small text_color_inactive">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        ) : null}
      </aside>
      <Outlet />
    </main>
  );
}
