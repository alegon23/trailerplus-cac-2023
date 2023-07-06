import { TMDB_API_paths } from "../core/APIs/tmdb.api";

export const moviesAdapter = (data) => {
  return data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    poster: TMDB_API_paths.images.poster(movie.poster_path),
    backdrop: movie.backdrop_path
      ? TMDB_API_paths.images.backdrop(movie.backdrop_path)
      : "https://via.placeholder.com/1920x1080?text=No+Image+Available",
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    type: "movie",
  }));
};

export const tvAdapter = (data) => {
  return data.map((tv) => ({
    id: tv.id,
    title: tv.name,
    description: tv.overview,
    poster: TMDB_API_paths.images.poster(tv.poster_path),
    backdrop: tv.backdrop_path
      ? TMDB_API_paths.images.backdrop(tv.backdrop_path)
      : "https://via.placeholder.com/1920x1080?text=No+Image+Available",
      rating: tv.vote_average,
      releaseDate: tv.first_air_date,
      type: "tv",
  }));
};
