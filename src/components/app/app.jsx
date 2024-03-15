import { useEffect } from "react";
import stylesApp from "./app.module.css";
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";

import AppHeader from "../app-header/app-header";
import {HomePage, RegisterPage, LoginPage} from "../../pages"

import {getIngredientsList} from "../../services/actions/ingredients";



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  return (
    <div className={stylesApp.container}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
