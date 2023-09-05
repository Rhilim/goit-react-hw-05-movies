import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import Search from 'pages/Search';

const HomePage = lazy(() => import("../pages/HomePage"));
const SingleMoviePage = lazy(() => import("../pages/SingleMoviePage"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import( "./Reviews"));

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Search/>} />
        <Route path="/movies/:movieId" element={<SingleMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
