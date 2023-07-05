import React, { useState } from "react";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import { Button, Card, Container, Row, Text } from "@nextui-org/react";
import styles from "./LoginView.module.css";
import CreditsModal from "../../../components/CreditsModal/CreditsModal";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const LoginView = () => {
  const FORMS = {
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",
  };

  const [showForm, setShowForm] = useState(FORMS.SIGN_IN);

  const handleShowForm = () => {
    setShowForm((prevState) =>
      prevState === FORMS.SIGN_IN ? FORMS.SIGN_UP : FORMS.SIGN_IN
    );
  };

  return (
    <>
      <Helmet>
        <title>Trailer+ - Inicia sesión</title>
        <meta
          name="description"
          content="Inicia sesión en Trailer+ y encontra tu proxima peli o show favorito"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trailer+ - Inicia sesión" />
        <meta
          property="og:description"
          content="Inicia sesión en Trailer+ y encontra tu proxima peli o show favorito"
        />
      </Helmet>

      <div className={styles.loginBackground}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Container
            sm
            css={{
              height: "90vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Row>
              <Card
                variant="bordered"
                height="90vh"
                width="50%"
                css={{ border: "2px solid #8a8a8a" }}
              >
                <Card.Header
                  css={{
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text weight="bold" h1 css={{ textAlign: "center" }}>
                    Bienvenido a Trailer+
                  </Text>
                  <Text h2 css={{ textAlign: "center" }}>
                    {showForm === FORMS.SIGN_UP
                      ? "Registrarse"
                      : "Iniciar Sesión"}
                  </Text>
                </Card.Header>
                <Card.Body css={{ alignItems: "center", paddingTop: "0px" }}>
                  {showForm === FORMS.SIGN_IN ? <SignInForm /> : <SignUpForm />}
                </Card.Body>
                <Card.Footer css={{ justifyContent: "center" }}>
                  <Button
                    light
                    color="primary"
                    size="sm"
                    onPress={handleShowForm}
                  >
                    {showForm === FORMS.SIGN_IN
                      ? "O puedes registrarte aqui"
                      : "Ya tienes una cuenta? Inicia sesión"}
                  </Button>
                </Card.Footer>
              </Card>
            </Row>
            <Row justify="right">
              <CreditsModal />
            </Row>
          </Container>
        </motion.div>
      </div>
    </>
  );
};

export default LoginView;
