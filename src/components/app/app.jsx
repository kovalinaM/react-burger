import React, { useEffect } from "react";
import stylesApp from "./app.module.css";
import {useSelector, useDispatch } from 'react-redux';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Preloader from "../preloader/preloader";

import {getIngredientsList} from "../../services/actions/ingredients";

const getIngredients = (store) => store.ingredients.ingredients;
const getIngredientsLoading = (store) => store.ingredients.ingredientsLoading;
const getIngredientsFailed = (store) => store.ingredients.ingredientsFailed

const App = () => {
  const ingredients = useSelector(getIngredients);
  const ingredientsLoading = useSelector(getIngredientsLoading);
  const ingredientsFailed = useSelector(getIngredientsFailed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  return (
    <div className={stylesApp.container}>
      <AppHeader />
      <main className={stylesApp.sections}>
        <DndProvider backend={HTML5Backend}>
            {ingredientsLoading && <Preloader/>}
            {ingredientsFailed && "Произошла ошибка"}
            {!ingredientsLoading && !ingredientsFailed && ingredients  && (
              <>
                <BurgerIngredients/>
                <BurgerConstructor /> 
              </>
            )}
        </DndProvider>
      </main>
    </div>
  );
};

export default App;
