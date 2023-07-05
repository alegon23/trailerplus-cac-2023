import axios from "axios";

export const TMDB_API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

export const TMDB_API_paths = {
  movies: {
    nowPlaying: "/movie/now_playing",
    popular: "/movie/popular",
    topRated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
    //aMovie: "/movie/550",
    details: (id) => `/movie/${id}`,
    images: (id) => `/movie/${id}/images`,
    videos: (id) => `/movie/${id}/videos`,
  },
  tv: {
    onTheAir: "/tv/on_the_air", //in the next 7 days
    popular: "/tv/popular",
    topRated: "/tv/top_rated",
    //aSeries: "/tv/550",
    details: (id) => `/tv/${id}`,
    images: (id) => `/tv/${id}/images`,
    videos: (id) => `/tv/${id}/videos`,
  },

  images: {
    url: "https://image.tmdb.org/t/p",
    backdropSizes: {
      small: "/w300",
      medium: "/w780",
      large: "/w1280",
      original: "/original",
    },
    posterSizes: {
      small: "/w342",
      medium: "/w780",
      large: "/w1280",
      original: "/original",
    },
    poster: (path, size = "large") => {
      return `${TMDB_API_paths.images.url}${TMDB_API_paths.images.posterSizes[size]}${path}`;
    },
    backdrop: (path, size = "large") => {
      return `${TMDB_API_paths.images.url}${TMDB_API_paths.images.backdropSizes[size]}${path}`;
    },
  },
};
