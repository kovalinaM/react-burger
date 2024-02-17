import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import data from '../../utils/data';

import stylesApp from "./app.module.css";

export default function App() {
  const handleIngredients = data.filter(item => item.__v > 0)

  return (
    <React.Fragment>
      <div className={stylesApp.container}>
        <AppHeader />
        <main className={stylesApp.sections}>
            <BurgerIngredients ingredients={data}/>
            <BurgerConstructor ingredients={handleIngredients}/>
        </main>
      </div>
    </React.Fragment>
  );
}
