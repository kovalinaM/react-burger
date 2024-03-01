import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import {getIngredientsList} from "../../services/actions/ingredients"
import {useSelector, useDispatch } from 'react-redux';

import stylesApp from "./app.module.css";

const App = () => {

  const dispatch = useDispatch();
  const {ingredients, ingredientsLoading, ingredientsFailed} = useSelector(store => store.ingredients);

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className={stylesApp.container}>
        <AppHeader />

        <main className={stylesApp.sections}>
          {ingredientsLoading && "Пожалуйста, подождите. Ингредиенты загружаются..."}
          {ingredientsFailed && "Произошла ошибка"}
          {!ingredientsLoading && !ingredientsFailed && ingredients  && (
            <BurgerIngredients/>
          // <BurgerConstructor />
          )}
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
