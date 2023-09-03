import axios from 'axios';

//Get the trending movies
const api_key='370cedd7ac7db43491cdc5a63d979178';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'


const options = {
  params: {
    api_key: api_key,
    language: 'en-US',
  },
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBjZWRkN2FjN2RiNDM0OTFjZGM1YTYzZDk3OTE3OCIsInN1YiI6IjY0ZWRmMTU5NTk0Yzk0MDEzOWNhNWMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2jCVn_RVGCejH5kZgcmybGQri87X46QtXPYHOTCLXo',
  },
};


export const getTrending = async () => {
    try {
    const response = await axios.get('/trending/all/day', options);
    console.log(response.data.results)
    return response.data.results;
    
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return []; 
  }
};


  export const getMovieById = async movieId => {
    try {
      const response = await axios.get(`/movie/${movieId}`, options);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
 
  export const getMovieCredits = async (movieId) => {
    try {
      const response = await axios.get(`/movie/${movieId}/credits`, options);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  export const getMovieReviews = async (movieId) => {
    try {
      const response = await axios.get(`/movie/${movieId}/reviews`, options);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  // export const getMovieReviews = async () => {
  //   try {
  //     const response = await axios.get('/movie/movie_id/reviews?language=en-US&page=1');
  //     console.log(response);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  // export const searchMovies = async () => {
  //   try {
  //     const response = await axios.get('/search/movie?include_adult=false&language=en-US&page=1');
  //     console.log(response);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
