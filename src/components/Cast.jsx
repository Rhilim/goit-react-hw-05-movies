import { getMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { Wrapper } from './Wrapper';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchCredits() {
      try {
        setIsLoading(true);
        const movieCast = await getMovieCredits(movieId);

        toast.success('Here is the movie cast');
        setCast(movieCast.cast);
      } catch (error) {
        toast.error('Error fetching cast data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCredits();
  }, [movieId]);

  return (
    <>
      <Wrapper>{isLoading && <Loader />}</Wrapper>
      <Toaster />
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
export default Cast;