import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { darkTheme } from "../theme/themes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "../auth/providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import ModalProvider from "../../providers/ModalProvider";

const RootProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <NextUIProvider theme={darkTheme}>
        <AuthProvider>
          <ModalProvider>{children}</ModalProvider>
        </AuthProvider>
      </NextUIProvider>
    </HelmetProvider>
  );
};

export default RootProvider;
