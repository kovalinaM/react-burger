import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../services/actions/profile";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useIsAuthenticated } from "../utils/selectors";
import Preloader from "./preloader/preloader";

const selectorGetUserRequest = (store) => store.auth.getUserRequest;

const UnAuthProtectedRouteElement = ({ element }) => {
  const isAuthenticated = useIsAuthenticated();
  const getUserRequest = useSelector(selectorGetUserRequest);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if(getUserRequest) {
    return <Preloader/>
  }

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
