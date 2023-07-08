import React, { useState } from "react";
import useSWR from "swr";
import { getPopularMoviesPages } from "../../../services/tmdb.service";
import { Button, Container, Row, Spacer, Text } from "@nextui-org/react";
import MoviesAndSeriesList from "../components/MoviesAndSeriesList";
import { Helmet } from "react-helmet-async";

const MoviesView = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, isLoading } = useSWR(
    `PopularMoviesPages-${pageIndex}`,
    () => getPopularMoviesPages(pageIndex)
  );

  return (
    <>
      <Helmet>
        <title>Trailer + | Peliculas</title>
        <meta name="description" content="Trailer + | Peliculas" />
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
            🍿 Películas Populares 🔥
          </Text>
        </Row>
        <Row
          css={{
            display: "flex",
            flexDirection: "column",
            width: "80vw",
          }}
        >
          {error && (
            <Text h1 color="error">
              Oops! Ocurrió un error
            </Text>
          )}
          {isLoading && (
            <Text h1 color="secondary">
              Cargando...
            </Text>
          )}
          {data && <MoviesAndSeriesList data={data} />}
        </Row>
        <Row
          css={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            size="xs"
            color="secondary"
            disabled={pageIndex === 1}
            onPress={() =>
              setPageIndex((prev) => (prev <= 0 ? (prev = 1) : prev - 1))
            }
          >
            ⬅ Prev
          </Button>
          <Spacer x={1} />
          <Text>Page {pageIndex}</Text>
          <Spacer x={1} />
          <Button
            size="xs"
            color="secondary"
            disabled={pageIndex === 500}
            onPress={() =>
              setPageIndex((prev) => (prev === 500 ? (prev = 1) : prev + 1))
            }
          >
            Next ➡
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default MoviesView;
