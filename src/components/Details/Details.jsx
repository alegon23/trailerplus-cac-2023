import React from "react";
import useSWR from "swr";
import { getMovieVideos } from "../../services/tmdb.service";
import { Container, Spacer, Text } from "@nextui-org/react";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const Details = ({ id, title, description }) => {
  const { data: movieVideos, isLoading: movieVideosIsLoading } = useSWR(
    "getMovieVideo" + id,
    () => getMovieVideos(id)
  );

  const youtubeUrl = "https://www.youtube.com/embed/";
  const youtubeVideo = movieVideos?.results[0]?.key;

  const isLoading = movieVideosIsLoading && !youtubeVideo;
  const hasError = !movieVideosIsLoading && !youtubeVideo;
  const hasData = !movieVideosIsLoading && youtubeVideo;

  return (
    <Container style={{overflowY: "scroll"}}>
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
