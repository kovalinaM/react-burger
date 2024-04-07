import { useSelector } from 'react-redux';

export const useIsAuthenticated = () => {
    return useSelector((store: any) => store.auth.isAuthenticated);
};