import { Routes, Route } from "react-router-dom";
import HomePage from '../../pages/HomePage';

export default function MainRouting() {
    return (
        <Routes>
            <Route path={'/'} element={ <HomePage /> } />
        </Routes>
    );
};
