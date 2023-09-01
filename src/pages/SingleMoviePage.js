import { Link, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { getMovieById } from 'api';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Loader } from 'components/Loader';
import { Wrapper } from 'components/Wrapper';


const api_key = '370cedd7ac7db43491cdc5a63d979178';

const SingleMoviePage = () => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const movieDetails = await getMovieById(movieId);
        // console.log(movieDetails);

        // toast.success('Please see below for selected movie details');
        setMovieData(movieDetails);
      } catch (error) {
        toast.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
    <Wrapper>
      {isLoading && <Loader />}
      </Wrapper>
      
      <Link to="/">
        <FaArrowLeftLong />
        Back to trending movies
      </Link>
      <div>SingleMoviePage of: {movieId}</div>
      {movieData && (
      <>
      
        <h2>{movieData.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w342${movieData.poster_path}?api_key=${api_key}`}
          alt={movieData.title}
        />
        <p>{movieData.overview}</p>
        <p>Release Date: {movieData.release_date}</p>
        <p>Runtime: {movieData.runtime} minutes</p>
        <p>Genres: {movieData.genres.map(genre => genre.name).join(', ')}</p>
        <p>Vote Average: {movieData.vote_average}</p>
        <p>Vote Count: {movieData.vote_count}</p>
        <Toaster />
      </>
      )}
    </>
  );
};

export default SingleMoviePage;
