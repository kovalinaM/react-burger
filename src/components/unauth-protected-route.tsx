import { FC, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../services/actions/profile";
import { Navigate, useLocation } from "react-router-dom";
import { useIsAuthenticated } from "../utils/selectors";
import Preloader from "./preloader/preloader";

const selectorGetUserRequest = (store:any) => store.auth.getUserRequest;

interface IUnAuthProtected {
  element: JSX.Element;
}
const UnAuthProtectedRouteElement: FC<IUnAuthProtected> = ({ element }) => {
  const isAuthenticated = useIsAuthenticated();
  const getUserRequest = useSelector(selectorGetUserRequest);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(
        //@ts-ignore
        getUser()
    );
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

export default UnAuthProtectedRouteElement;
