import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";

import { getUser } from "../services/actions/profile";
import Preloader from "./preloader/preloader";

const ProtectedRouteElement = ({ element }) => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const getUserRequest = useSelector((store) => store.auth.getUserRequest);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const dispatch = useDispatch();

  const init = async () => {
    await dispatch(getUser());
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return getUserRequest && !isAuthenticated  ? <Preloader/> : isAuthenticated ? element : <Navigate to="/login" replace />;
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element,
};

export default ProtectedRouteElement;
