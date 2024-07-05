import axios from "axios";

const apiKey = "9f8d51dc26cb7eba924e19fb1bb3f0de"; 
const apiBaseUrl = "https://api.themoviedb.org/3";

export const fetchMovies = async (page) => {
  const response = await axios.get(`${apiBaseUrl}/movie/popular`, {
    params: {
      api_key: apiKey,
      page: page,
    },
  });
  return response.data;
};

export const fetchGenres = async () => {
  const response = await axios.get(`${apiBaseUrl}/genre/movie/list`, {
    params: {
      api_key: apiKey,
    },
  });
  return response.data.genres;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${apiBaseUrl}/movie/${movieId}`, {
    params: {
      api_key: apiKey,
    },
  });
  return response.data;
};
