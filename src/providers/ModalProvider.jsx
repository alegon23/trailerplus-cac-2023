import { useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { Button, Modal, css, useModal } from "@nextui-org/react";

const ModalProvider = ({ children }) => {
  const initialConfiguration = {
    borderImage: "linear-gradient(rgba(63,94,251,1), rgba(255,78,205,1)) 30",
    borderWidth: "1px",
    borderStyle: "solid",
    width: "50vw",
    height: "90vh",
  };

  const [content, setContent] = useState(null);
  const [config, setConfig] = useState(initialConfiguration);
  const { setVisible, bindings } = useModal();

  const openModal = ({ content, config = initialConfiguration }) => {
    setConfig(config);
    setContent(content);
    setVisible(true);
  };

  const closeModal = () => {
    setConfig(initialConfiguration);
    setContent(null);
    setVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      <Modal
        blur
        width={config.width}
        css={config}
        {...bindings}
      >
        <Modal.Body css={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center"}}>
        {content}
        </Modal.Body>
        
        <Modal.Footer>
        <Button auto flat color="error" onPress={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
