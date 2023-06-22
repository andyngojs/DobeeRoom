import { Routes, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';

export default function AppRouting() {
    return (
        <Routes>
            <Route path={'/*'} element={ <Layout /> } />
            <Route path={'/login'} element={ <LoginPage/> } />
            <Route path={'/register'} element={ <RegisterPage /> } />
        </Routes>
    );
};