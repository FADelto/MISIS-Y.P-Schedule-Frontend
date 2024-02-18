import React, { useEffect } from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ element, path }) {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        console.log(isAuthenticated)
        console.log(typeof isAuthenticated);
    }, [])

    if (!isAuthenticated) {
        return <Navigate to="/welcome" />;
    }

    return element;
};
