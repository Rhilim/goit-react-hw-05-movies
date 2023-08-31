import HomePage from "pages/HomePage";
import Movies from "pages/Movies";
import { NavLink, Route, Routes } from "react-router-dom";

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
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
      <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
      <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
    </Routes>
    </div>
  );
};


// API_KEY = '370cedd7ac7db43491cdc5a63d979178';
// Here's an example API request:

// https://api.themoviedb.org/3/movie/550?api_key=370cedd7ac7db43491cdc5a63d979178

// API Read Access Token = eyJhbGciOiJIUzI1NiJ9.'eyJhdWQiOiIzNzBjZWRkN2FjN2RiNDM0OTFjZGM1YTYzZDk3OTE3OCIsInN1YiI6IjY0ZWRmMTU5NTk0Yzk0MDEzOWNhNWMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ'.K2jCVn_RVGCejH5kZgcmybGQri87X46QtXPYHOTCLXo