import React from "react";
import useSWR from "swr";
import { getMovieVideos, getTVVideos } from "../../services/tmdb.service";
import { Container, Spacer, Text } from "@nextui-org/react";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const Details = ({ id, title, description, type }) => {
  const handleType = () => {
    if (type === "movie") return getMovieVideos(id);

    return getTVVideos(id);
  };

  const { data: movieOrSeriesVideo, isLoading: movieOrSeriesVideoIsLoading } =
    useSWR("getVideo" + id, () => handleType());

  const youtubeUrl = "https://www.youtube.com/embed/";
  const youtubeVideo = movieOrSeriesVideo?.results[0]?.key;

  const isLoading = movieOrSeriesVideoIsLoading && !youtubeVideo;
  const hasError = !movieOrSeriesVideoIsLoading && !youtubeVideo;
  const hasData = !movieOrSeriesVideoIsLoading && youtubeVideo;

  return (
    <Container style={{ overflowY: "scroll" }}>
      <Text h3>{title}</Text>
      <Spacer y={1} />
      <Text h4>Sinopsis</Text>
      <Spacer y={0.5} />
      <Text>{description}</Text>
      <Spacer y={1} />
      <Text h4>Video</Text>
      <Spacer y={0.5} />
      {isLoading && <Text>Buscando...</Text>}
      {hasError && <Text>❌Lo siento... No se encontro el video❌</Text>}
      {hasData && <YoutubeVideo src={`${youtubeUrl}${youtubeVideo}`} />}
    </Container>
  );
};

export default Details;
