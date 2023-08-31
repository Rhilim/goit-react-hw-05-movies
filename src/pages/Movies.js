import { getTrending } from 'api';
import { useEffect, useState } from 'react'; // Import useState


const Movies = () => {
    const [films, setFilms] = useState([]);
useEffect(() => {
    async function fetchMovies() {
      try {
        const results = await getTrending();
        console.log(results);
        const filmsData = results.map(
          ({ id, backdrop_path, title, name }) => ({
            id,
            backdrop_path,
            title,
            name,
          })
        );
        console.log(filmsData);
        setFilms(filmsData); // Update state with the fetched films
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title || film.name}</li>
        ))}
      </ul>
    </>
  );
};
  
  export default Movies;

