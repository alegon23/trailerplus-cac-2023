import { Input } from "@nextui-org/react";
import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Input bordered label={label} {...field} {...props} color={meta.touched && meta.error ? "error" : "default"}/>
      {meta.touched && meta.error && <p style={{color:"red"}}>{meta.error}</p>}
    </>
  );
};

export default CustomInput;