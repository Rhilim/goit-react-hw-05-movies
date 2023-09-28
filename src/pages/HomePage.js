import styled from '@emotion/styled';
import { getTrending } from 'api';
import { Loader } from 'components/Loader';
import { Wrapper } from 'components/Wrapper';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

export const StyledListTrend = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  color: #212121;
`;

const StyledLinkHome = styled(NavLink)`
  text-decoration: none;
  :hover {
    color: orangered;
  }
`;
const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const results = await getTrending();
        const filmsData = results.map(({ id, backdrop_path, title, name }) => ({
          id,
          backdrop_path,
          title,
          name,
        }));
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
      <Wrapper>{isLoading && <Loader />}</Wrapper>
      <h1>Trending Today</h1>
      <StyledListTrend>
        {films.map(film => (
          <StyledLinkHome to={`/movies/${film.id}`}>
            <li key={film.id}>{film.title || film.name}</li>
          </StyledLinkHome>
        ))}
      </StyledListTrend>
      <Toaster />
    </>
  );
};

export default HomePage;
