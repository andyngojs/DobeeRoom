import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export default function AppRouting() {
    return (
        <Routes>
            <Route path={'/login'} element={ <LoginPage/> } />
            <Route path={'/'} element={ <HomePage/> } />
        </Routes>
    )
}