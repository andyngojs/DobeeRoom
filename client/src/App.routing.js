import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';

export default function AppRouting() {
    return (
        <Routes>
            <Route path={'/login'} element={ <LoginPage/> } />
            <Route path={'/register'} element={ <RegisterPage /> } />
            <Route path={'/'} element={ <Layout /> } />
        </Routes>
    );
};