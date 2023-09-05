import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";
// import Search from 'pages/Search';
// import HomePage from 'pages/HomePage';
// import SingleMoviePage from 'pages/SingleMoviePage';
// import Cast from './Cast';
// import Reviews from './Reviews';
import { Layout } from './Layout';

const HomePage = lazy(() => import("../pages/HomePage"));
const SingleMoviePage = lazy(() => import("../pages/SingleMoviePage"));
const Search = lazy(() => import("../pages/Search"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import( "./Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:movieId" element={<SingleMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
