/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import { createContext, useState } from "react";

export interface UserThemeContextDto {
    theme: string;
    toggleTheme: Function;
}

export const UserThemeContext = createContext('Guest');
function Router() {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        console.log("toggle them.....", theme);
    };
    
    const contextValue = {
        theme,
        toggleTheme,
    } as UserThemeContextDto;
    
    return (
        <div className={`${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} main-container fixed inset-0 w-full h-full overflow-y-auto overflow-hidden`}>
            <UserThemeContext.Provider value={contextValue}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/product/:id" element={<Detail />} />
                    </Routes>
                </BrowserRouter>
            </UserThemeContext.Provider>
        </div>
    )
}

export default Router
