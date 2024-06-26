import {FC, useEffect} from "react";
import stylesApp from "./app.module.css";
import { useDispatch } from "../../services/types";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import AppHeader from "../app-header/app-header";
import {HomePage, FeedPage, OrderDetailsPage, IngredientDetailsPage, RegisterPage, LoginPage, ForgotPasswordPage, ResetPasswordPage, ProfilePage, ProfileEdit, ProfileOrders, NotFoundPage} from "../../pages"
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import {getIngredientsList} from "../../services/actions/ingredients";
import ProtectedRouteElement from "../protected-route";
import UnAuthProtectedRouteElement from "../unauth-protected-route";
import {OrderDetailCard} from "../order-detail-card/order-detail-card";


const App: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background =  location.state && location.state.background;

  useEffect(() => {
    dispatch(
        getIngredientsList()
    );
  }, [dispatch]);

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <div className={stylesApp.container}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path='/feed/:orderId'
               element={<OrderDetailsPage/>} />
        <Route path='/profile/orders/:orderId'
               element={<ProtectedRouteElement element={<OrderDetailsPage/>}/> }/>
        <Route path='/ingredients/:ingredientId'
          element={<IngredientDetailsPage/>} />
        <Route path="/register"  element={<UnAuthProtectedRouteElement element={<RegisterPage/>}></UnAuthProtectedRouteElement>}/>
        <Route path="/login" element={<UnAuthProtectedRouteElement element={<LoginPage/>}></UnAuthProtectedRouteElement>}/>
        <Route path="/forgot-password" element={<UnAuthProtectedRouteElement element={<ForgotPasswordPage/>}></UnAuthProtectedRouteElement>}/>
        <Route path="/reset-password" element={<UnAuthProtectedRouteElement element={<ResetPasswordPage/>}></UnAuthProtectedRouteElement>}/>
        <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />}/>}>
          <Route index element={<ProtectedRouteElement element={<ProfileEdit />}/>} />
          <Route path="orders" element={<ProtectedRouteElement element={<ProfileOrders  />}/>} />
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
      {background && (
          <Routes>
            <Route
                path='/feed/:orderId'
                element={
                  <Modal onClose={handleModalClose}>
                    <OrderDetailCard />
                  </Modal>
                }
            />
          </Routes>
      )}
      {background && (
          <Routes>
            <Route
                path='/profile/orders/:orderId'
                element={
                  <Modal onClose={handleModalClose}>
                    <OrderDetailCard />
                  </Modal>
                }
            />
          </Routes>
      )}
    </div>
  );
};

export default App;
