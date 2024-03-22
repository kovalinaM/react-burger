import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../services/actions/profile";
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';

import { useEffect } from 'react';


const UnAuthProtectedRouteElement = ({ element }) => {
    const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]);

    return isAuthenticated ? <Navigate to={location.state?.path || '/'} replace /> : element;
}

UnAuthProtectedRouteElement.propTypes = {
    element: PropTypes.element,
};

export default UnAuthProtectedRouteElement;