import axios from 'axios';

//Get the trending movies
const api_key='370cedd7ac7db43491cdc5a63d979178';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'



export const getTrending = async () => {
  const options = {
    api_key: api_key,
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBjZWRkN2FjN2RiNDM0OTFjZGM1YTYzZDk3OTE3OCIsInN1YiI6IjY0ZWRmMTU5NTk0Yzk0MDEzOWNhNWMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2jCVn_RVGCejH5kZgcmybGQri87X46QtXPYHOTCLXo'
    }
  };

  try {
    const response = await axios.get('/trending/all/day?language=en-US', options);
    return response.data.results; // Return the results array
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return []; // Return an empty array in case of an error
  }
};



  export const searchMovies = async () => {
    try {
      const response = await axios.get('/search/movie?include_adult=false&language=en-US&page=1');
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  export const getMovieDetails = async () => {
    try {
      const response = await axios.get('/movie/movie_id?language=en-US');
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  

  export const getMovieCredits = async () => {
    try {
      const response = await axios.get('movie/movie_id/credits?language=en-US');
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  export const getMovieReviews = async () => {
    try {
      const response = await axios.get('/movie/movie_id/reviews?language=en-US&page=1');
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }