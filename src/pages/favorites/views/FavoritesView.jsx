import React from "react";
import useFavorites from "../../../hooks/useFavorites";
import useSWR from "swr";
import { getMovieDetails, getTVDetails } from "../../../services/tmdb.service";
import MoviesAndSeriesList from "../../moviesAndSeries/components/MoviesAndSeriesList";
import { Container, Row, Text } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";

const FavoritesView = () => {
  const { favorites } = useFavorites();

  const { data, isLoading, error } = useSWR(["getFavorites", favorites], () => {
    if (!favorites) return;

    const promises = favorites.map((fav) =>
      fav.type === "movie" ? getMovieDetails(fav.id) : getTVDetails(fav.id)
    );

    return Promise.allSettled(promises).then((res) => {
      const data = res
        .filter((e) => e.status === "fulfilled")
        .map((e) => e.value);
      return data.flat();
    });
  });

  return (
    <>
    <Helmet>
        <title>Trailer + | Tus Favoritos</title>
        <meta name="description" content="Trailer + | Tus Favoritos" />
      </Helmet>
      <Container
      css={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Row
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(203,65,164,1) 35%, rgba(0,212,255,1) 100%);",
        }}
      >
        <Text h1 css={{ textAlign: "center" }}>
        ⭐ Tus Favoritos ❤️
        </Text>
      </Row>
      <Row
        css={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          alignItems: "center"
        }}
      >
        {error && (
          <Text h2 color="error">
            Oops! Ocurrió un error
          </Text>
        )}
        {isLoading && (
          <Text h2 color="warning">
            Cargando...
          </Text>
        )}
        {data?.length !== 0 ? <MoviesAndSeriesList data={data}/> : <Text h2>Aún no tienes favoritos, empieza a explorar 🧐</Text>}
      </Row>
    </Container>
    </>
  );
};

export default FavoritesView;