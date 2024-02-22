import React, { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import chosenIngredients from "../../utils/chosen-ingredients.js";

import stylesApp from "./app.module.css";

const App = () => {
  const URL = "https://norma.nomoreparties.space/api/ingredients";
  const CHOSEN_INGREDIENTS = chosenIngredients;
  const [state, setState] = useState({
    data: [],
    isLoading: false,
    hasError: false,
  });

  useEffect(() => {
    const getIngredients = async () => {
      setState((prevState) => ({
        ...prevState,
        hasError: false,
        isLoading: true,
      }));
      try {
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error("ошибка загрузки данных");
        }
        const data = await res.json();
        setState((prevState) => ({ ...prevState, data, isLoading: false }));
      } catch (error) {
        console.error("Произошла ошибка: ", error);
        setState((prevState) => ({
          ...prevState,
          hasError: true,
          isLoading: false,
        }));
      }
    };

    getIngredients();
  }, []);

  const { data, isLoading, hasError } = state;
  const ingredientsList = data.data;

  return (
    <React.Fragment>
      <div className={stylesApp.container}>
        <AppHeader />

        <main className={stylesApp.sections}>
          {isLoading && "Загрузка..."}
          {hasError && "Произошла ошибка"}
          {hasError && "Произошла ошибка"}
          {!isLoading && !hasError && ingredientsList && (
            <BurgerIngredients ingredients={ingredientsList} />
          )}
          <BurgerConstructor ingredients={CHOSEN_INGREDIENTS} />
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
