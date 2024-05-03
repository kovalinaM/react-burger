import { useDispatch, useSelector } from "../services/types";
import { Navigate } from "react-router-dom";
import { FC, useState, useEffect } from "react";

import { getUser } from "../services/actions/profile";
import Preloader from "./preloader/preloader";
import { useIsAuthenticated } from "../utils/selectors";


interface IProtected {
  element: JSX.Element;
}
const ProtectedRouteElement: FC<IProtected> = ({ element }) => {
  const isAuthenticated = useIsAuthenticated();
  const getUserRequest = useSelector((store) => store.auth.getUserRequest);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
        getUser()
    );
    setUserLoaded(true);
  }, [dispatch]);

  if (!isUserLoaded) {
    return <Preloader/>;
  }

  return getUserRequest && !isAuthenticated ? (
    <Preloader />
  ) : isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRouteElement;
