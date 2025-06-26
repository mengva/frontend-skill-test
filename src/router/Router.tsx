import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
function Router() {

    return (
        <div className="main-container fixed inset-0 w-full h-full overflow-y-auto overflow-hidden">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/product/:id" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
