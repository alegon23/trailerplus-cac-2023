import React, { useEffect, useState } from "react";
import "swiper/css/bundle";
import useSWR from "swr";
import { Container, Spacer, Text } from "@nextui-org/react";
import CarouselSlides from "../../../components/CarouselSlides/CarouselSlides";
import {
  getNowPlayingMovies,
  getOnTheAirTV,
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies,
  getTopRatedTV,
  getUpcomingMovies,
} from "../../../services/tmdb.service";
import Banner from "../../../components/Banner/Banner";
import { Helmet } from "react-helmet-async";

const HomeView = () => {
  const { data: topRatedMovies, isLoading: topRatedMoviesIsLoading } = useSWR(
    "getTopRatedMovies",
    () => getTopRatedMovies()
  );

  const { data: popularMovies, isLoading: popularMoviesIsLoading } = useSWR(
    "getPopularMovies",
    () => getPopularMovies()
  );

  const { data: nowPlayingMovies, isLoading: nowPlayingMoviesIsLoading } =
    useSWR("getNowPlayingMovies", () => getNowPlayingMovies());

  const { data: upcomingMovies, isLoading: upcomingMoviesIsLoading } = useSWR(
    "getUpcomingMovies",
    () => getUpcomingMovies()
  );

  const { data: onTheAirTV, isLoading: onTheAirTVIsLoading } = useSWR(
    "getOnTheAirTV",
    () => getOnTheAirTV()
  );

  const { data: popularTV, isLoading: popularTVIsLoading } = useSWR(
    "getPopularTV",
    () => getPopularTV()
  );

  const { data: topRatedTV, isLoading: topRatedTVIsLoading } = useSWR(
    "getTopRatedTV",
    () => getTopRatedTV()
  );

  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const getRandomMovieOrSerie = () => {
      const random = Math.random() * 10;

      if (popularMoviesIsLoading || popularTVIsLoading) return;

      if (random > 5)
        return popularMovies[Math.floor(Math.random() * popularMovies.length)];

      return popularTV[Math.floor(Math.random() * popularTV.length)];
    };

    const randomMovieOrSerie = getRandomMovieOrSerie();
    setBanner(randomMovieOrSerie);
  }, [popularMovies, popularMoviesIsLoading, popularTV, popularTVIsLoading]);

  return (
    <>
      <Helmet>
        <title>Trailer + | Home</title>
        <meta name="description" content="Trailer + | Home" />
      </Helmet>
      <Container style={{ width: "100vw" }}>
        <Banner data={banner} />
        <Spacer y={2} />
        <Text h1>✨ Encuentra tu proxima peli favorita ✨</Text>
        <Spacer y={2} />
        <CarouselSlides
          title="Peliculas Mejor Puntuadas ⭐"
          data={topRatedMovies}
          isLoading={topRatedMoviesIsLoading}
        />
        <Spacer y={2} />
        <CarouselSlides
          title="Peliculas Populares ❤️"
          data={popularMovies}
          isLoading={popularMoviesIsLoading}
        />
        <Spacer y={2} />
        <CarouselSlides
          title="Que Pelis Puedes Ver Ahora 🍿"
          data={nowPlayingMovies}
          isLoading={nowPlayingMoviesIsLoading}
        />
        <Spacer y={2} />
        <CarouselSlides
          title="Proximamente... ⏳"
          data={upcomingMovies}
          isLoading={upcomingMoviesIsLoading}
        />
        <Spacer y={2} />
        <Text h1>✨ O... Puedes encontrar tu proxima serie favorita ✨</Text>
        <Spacer y={2} />
        <CarouselSlides
          title="Series Mejor Puntuadas ⭐"
          data={topRatedTV}
          isLoading={topRatedTVIsLoading}
        />
        <Spacer y={2} />
        <CarouselSlides
          title="Series Populares ❤️"
          data={popularTV}
          isLoading={popularTVIsLoading}
        />
        <Spacer y={2} />
        <CarouselSlides
          title="Series que se estrenan en los proximos 7 días 🧐"
          data={onTheAirTV}
          isLoading={onTheAirTVIsLoading}
        />
      </Container>
    </>
  );
};

export default HomeView;
