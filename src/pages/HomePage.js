import { getTrending } from 'api';
import { Loader } from 'components/Loader';
import { Wrapper } from 'components/Wrapper';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const results = await getTrending();
        // console.log(results);
        // toast.success('These are trending movies for today');
        const filmsData = results.map(({ id, backdrop_path, title, name }) => ({
          id,
          backdrop_path,
          title,
          name,
        }));
        // console.log(filmsData);
        setFilms(filmsData);
      } catch (error) {
        toast.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
    <Wrapper>
      {isLoading && <Loader />}
      </Wrapper>
      <h1>Trending Today</h1>
      <ul>
        {films.map(film => (
          <Link to={`/movies/${film.id}`}>
            <li key={film.id}>{film.title || film.name}</li>
          </Link>
        ))}
      </ul>
      <Toaster />
    </>
  );
};

export default HomePage;
