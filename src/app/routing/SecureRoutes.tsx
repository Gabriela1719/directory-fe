import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoadingSpinner } from "../../components";

export const SecureRoutes: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
    console.log(isAuthenticated);
    useEffect(() => {
        const fetchAuth = async () => {
            try {
                const response = await axios.get('http://localhost:8080/auth', {
                    withCredentials: true
                });
                setIsAuthenticated(response.data);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        fetchAuth();
    }, [isAuthenticated]);

    if (isAuthenticated === undefined) {
        return <LoadingSpinner />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />
}