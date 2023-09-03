import { getMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { Wrapper } from './Wrapper';

export const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

//   console.log(cast);
  useEffect(() => {
    if (!movieId) return;
    async function fetchCredits() {
      try {
        setIsLoading(true);
        const movieCast = await getMovieCredits(movieId);
        console.log(movieCast.cast);

        // toast.success('Please see below for selected movie details');
        setCast(movieCast.cast);
      } catch (error) {
        //   toast.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCredits();
  }, [movieId]);

  return (
    <>
      <Wrapper>{isLoading && <Loader />}</Wrapper>
      {/* <Link to="/movies/:movieId/cast">Cast</Link> */}
      {cast && 
      
        cast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width={200}
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </>
  );
};
