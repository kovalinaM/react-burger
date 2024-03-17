import { useEffect } from "react";
import stylesApp from "./app.module.css";
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import AppHeader from "../app-header/app-header";
import {HomePage, IngredientDetailsPage, RegisterPage, LoginPage, ForgotPasswordPage, ResetPasswordPage, ProfilePage, ProfileEdit, ProfileOrders, NotFoundPage} from "../../pages"
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import {getIngredientsList} from "../../services/actions/ingredients";



const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background =  location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <div className={stylesApp.container}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/ingredients/:ingredientId'
          element={<IngredientDetailsPage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path="/reset-password" element={<ResetPasswordPage/>}/>
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<ProfileEdit />} />
          <Route path="orders" element={<ProfileOrders />} />
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>

      {background && (
        <Routes>
            <Route
              path='/ingredients/:ingredientId'
              element={
                <Modal header="Детали ингредиента" onClose={handleModalClose}>
                  <IngredientDetails />
                </Modal>
              }
            />
        </Routes>
      )}
    </div>
  );
};

export default App;
