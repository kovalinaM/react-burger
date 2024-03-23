import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../services/actions/profile";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useIsAuthenticated } from "../utils/selectors";

const UnAuthProtectedRouteElement = ({ element }) => {
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  return isAuthenticated ? (
    <Navigate to={location.state?.path || "/"} replace />
  ) : (
    element
  );
};

UnAuthProtectedRouteElement.propTypes = {
  element: PropTypes.element,
};

export default UnAuthProtectedRouteElement;
