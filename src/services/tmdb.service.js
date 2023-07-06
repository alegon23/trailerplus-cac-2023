import { moviesAdapter, tvAdapter } from "../adapters/tmdb.adapters";
import { TMDB_API, TMDB_API_paths } from "../core/APIs/tmdb.api";

export const getNowPlayingMovies = async () => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.movies.nowPlaying}`);
  return moviesAdapter(data.results);
};

export const getPopularMovies = async () => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.movies.popular}`);
  return moviesAdapter(data.results);
};

export const getPopularMoviesPages = async (num) => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.movies.popular}`, {
    params: {
      page: num,
    },
  });
  return moviesAdapter(data.results);
};

/*export const getAMovie = async() => {
    const data = TMDB_API.get(`${TMDB_API_paths.movies.aMovie}`);
    return data;
}*/

/*export const getASeries = async() => {
    const data = TMDB_API.get(`${TMDB_API_paths.tv.aSeries}`);
    return data;
}*/

export const getTopRatedMovies = async () => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.movies.topRated}`);
  return moviesAdapter(data.results);
};

export const getUpcomingMovies = async () => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.movies.upcoming}`);
  return moviesAdapter(data.results);
};

export const getMovieDetails = async (id) => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.movies.details(id)}`);
  return data;
};

export const getMovieImages = async (id) => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.movies.images(id)}`);
  return data;
};

export const getMovieVideos = async (id) => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.movies.videos(id)}`);
  return data;
};

export const getOnTheAirTV = async () => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.tv.onTheAir}`);
  return tvAdapter(data.results);
};

export const getPopularTV = async () => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.tv.popular}`);
  return tvAdapter(data.results);
};

export const getPopularTVPages = async (num) => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.tv.popular}`, {
    params: {
      page: num,
    },
  });
  return tvAdapter(data.results);
};

export const getTopRatedTV = async () => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.tv.topRated}`);
  return tvAdapter(data.results);
};

export const getTVDetails = async (id) => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.tv.details(id)}`);
  return data;
};

export const getTVImages = async (id) => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.tv.images(id)}`);
  return data;
};

export const getTVVideos = async (id) => {
  const { data } = await TMDB_API.get(`${TMDB_API_paths.tv.videos(id)}`);
  return data;
};
