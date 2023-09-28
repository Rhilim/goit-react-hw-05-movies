import { searchMovies } from 'api';
import { Loader } from 'components/Loader';
import { Wrapper } from 'components/Wrapper';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') {
      toast.error('Please enter text for search images', {
        duration: 2000,
        position: 'top-center',
        style: {
          backgroundColor: 'orangered',
          color: 'white',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      return;
    }

    setIsLoading(true);

    try {
      const searchByTitle = await searchMovies(query);
      setSearchResults(searchByTitle.results);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Wrapper>{isLoading && <Loader />}</Wrapper>
      <Toaster />
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <button type="submit">
          <ImSearch />
        </button>

        <input
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setQuery(e.currentTarget.value)}
        ></input>
      </form>

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(result => (
            <Link to={`/movies/${result.id}`}>
              <li key={result.id}>{result.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
