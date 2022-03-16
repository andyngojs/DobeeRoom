import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from './pages/RegisterPage';

export default function AppRouting() {
    return (
        <Routes>
            <Route path={'/login'} element={ <LoginPage/> } />
            <Route path={'/register'} element={ <RegisterPage /> } />
            <Route path={'/'} element={ <HomePage/> } />
        </Routes>
    )
}