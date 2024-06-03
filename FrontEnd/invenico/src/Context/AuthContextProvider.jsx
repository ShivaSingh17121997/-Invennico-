import React, { createContext, useState } from 'react'

export const AuthContexts = createContext();

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);

    const login = (token) => {
        setIsAuth(true);
        setToken(token)
    }


    const logout = () => {
        setIsAuth(false);
        setToken(null)
    }

    console.log(isAuth, token)
    return (
        <div>
            <AuthContexts.Provider value={{ isAuth, login, logout }} >
                {children}
            </AuthContexts.Provider>
        </div>
    )
}
