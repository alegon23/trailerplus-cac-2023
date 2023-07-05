import { Button, Image, Modal, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import github from "../../assets/github_logo.png";

const CreditsModal = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <Button
        onPress={handler}
        size="xs"
        shadow
        rounded
        bordered
        color="gradient"
      >
        Credits
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text h2>Credits</Text>
        </Modal.Header>
        <Modal.Body>
          <Text title="Go to Freepik">
            <Link to="https://www.freepik.com/icon/user_2102647#position=10&page=1&term=user&fromView=search">
              ✨User Icon by Freepik
            </Link>
          </Text>
          <Text title="Go to Freepik">
            <Link to="https://www.freepik.com/free-vector/seamless-pattern-with-cinema-elements_8084124.htm#query=movie%20clapper&position=8&from_view=search&track=ais">
              ✨Login Background by dgim-studio on Freepik
            </Link>
          </Text>
          <Text title="Go to LottieFiles">
            <Link to="https://lottiefiles.com/95713-valentine-404-error-page">
              ✨404 Lottie Animation
            </Link>
          </Text>
          <Text title="Go to TMDB">
            <Link to="https://www.themoviedb.org/">✨TMDB API</Link>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Text title="Go to the Repository on GitHub">
            <Link to="https://github.com/alegon23/trailerplus-cac-2023">
              Codo a Codo 2023
            </Link>
          </Text>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreditsModal;
