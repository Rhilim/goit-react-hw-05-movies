import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { Wrapper } from './Wrapper';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchReview() {
      try {
        setIsLoading(true);
        const movieReviews = await getMovieReviews(movieId);

        toast.success('Here are the movie reviews');
        setReviews(movieReviews.results);
      } catch (error) {
        toast.error('Error fetching cast data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReview();
  }, [movieId]);

  return (
    <>
      <Wrapper>{isLoading && <Loader />}</Wrapper>
      <Toaster />

      {(reviews) ? (
        reviews.map(({ id, author, content }) => {
          return (
            <ul>
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>Character: {content}</p>
              </li>
            </ul>
          );
        })
      ) : (
        <p>There is no reviews on this movie</p>
      )}
      
    </>
  );
};

export default Reviews;
