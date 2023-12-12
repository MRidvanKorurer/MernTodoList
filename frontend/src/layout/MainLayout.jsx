import React from "react";
import Header from "../components/layouts/Header";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default MainLayout;
