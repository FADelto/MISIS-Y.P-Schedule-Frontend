import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(localStorage.getItem('auth') === 'true' || false);


    const login = () => {
        setAuthenticated(true);
        localStorage.setItem('auth', true);
    };

    const logout = () => {
        setAuthenticated(false);
        localStorage.setItem('auth', false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};
