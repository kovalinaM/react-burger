import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { getUser } from "../services/actions/profile";
import Preloader from "./preloader/preloader";
import {useIsAuthenticated} from "../utils/selectors";

const ProtectedRouteElement = ({ element }) => {
  const isAuthenticated = useIsAuthenticated();
  const getUserRequest = useSelector((store) => store.auth.getUserRequest);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    setUserLoaded(true);
  }, [dispatch]);

  if (!isUserLoaded) {
    return null;
  }

  return getUserRequest && !isAuthenticated ? (
    <Preloader />
  ) : isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element,
};

export default ProtectedRouteElement;
