import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import pageNotFound from "../../../assets/pageNotFound.json";
import { Card, Container, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ErrorView = () => {
  return (
    <Container
      style={{
        height: "90vh",
        width: "100vw",
      }}
    >
      <Card
        variant="flat"
        css={{
          margin: "0px",
          backgroundColor: "transparent",
        }}
      >
        <Card.Body css={{ py: "$2" }}>
          <Text h3 color="error" css={{ textAlign: "center" }}>
            Lo siento, esta página no existe
          </Text>
          <Link to="/">
            <Text h4 css={{ textAlign: "center" }}>
              Haz clic aqui para volver al inicio
            </Text>
          </Link>
        </Card.Body>
      </Card>
      <Player
        autoplay
        loop
        src={pageNotFound}
        style={{
          height: "80vh",
          width: "100vw",
          margin: "0px",
        }}
      ></Player>
    </Container>
  );
};

export default ErrorView;
