import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import stylesApp from "./app.module.css";

export default function App() {
  return (
    <React.Fragment>
      <div className={stylesApp.container}>
        <AppHeader />
        <main>
            тело
        </main>
      </div>
    </React.Fragment>
  );
}
