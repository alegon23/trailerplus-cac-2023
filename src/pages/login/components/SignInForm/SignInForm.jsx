import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import { basicSchema } from "../../schemas";
import { Button, Spacer } from "@nextui-org/react";
import useLogin from "../../hooks/useLogin";

const SignInForm = () => {
  const { signInEmail, signInGoogle } = useLogin();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={basicSchema}
      onSubmit={signInEmail}
    >
      {({ isSubmitting }) => (
        <Form
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <CustomInput
            label="Correo Electronico"
            name="email"
            type="email"
            placeholder="example@mail.com"
          />
          <Spacer y={1} />
          <CustomInput
            label="Contraseña"
            name="password"
            type="password"
            placeholder="******"
          />
          <Spacer y={1} />
          <Button
            color="secondary"
            disabled={isSubmitting}
            type="submit"
          >
            Iniciar Sesion
          </Button>
          <Spacer y={0.5} />
          <Button onPress={signInGoogle} color="primary" type="submit">
            Iniciar Sesion con Google
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
