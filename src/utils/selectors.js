import { useSelector } from 'react-redux';

export const useIsAuthenticated = () => {
    return useSelector((store) => store.auth.isAuthenticated);
};