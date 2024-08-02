import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const MainLayout = ({children}) => {
  return (
    <>
      <Menu />
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
