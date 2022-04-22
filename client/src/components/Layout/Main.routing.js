import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import UserPage from "../../pages/UserPage";
import AboutPage from "../../pages/AboutPage";
import PostPage from "../../pages/PostPage";
import DetailPage from "../../pages/DetailPage";

export default function MainRouting() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={'/detail/:id'} element={ <DetailPage /> } />
      <Route path={"/search"} element={<SearchPage />} />
      <Route path={"/user"} element={<UserPage />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"/new-post"} element={<PostPage />} />
    </Routes>
  );
}
