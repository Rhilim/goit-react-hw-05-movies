import HomePage from 'pages/HomePage';
import { Search } from 'pages/Search';
import SingleMoviePage from 'pages/SingleMoviePage';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

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
      </Routes>
    </div>
  );
};
