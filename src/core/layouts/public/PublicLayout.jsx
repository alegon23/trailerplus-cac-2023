import React from "react";
import Nav from "../../../components/Navbar/Nav";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default PublicLayout;
