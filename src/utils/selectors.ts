import { useSelector } from '../services/types';

export const useIsAuthenticated = () => {
    return useSelector((store) => store.auth.isAuthenticated);
};