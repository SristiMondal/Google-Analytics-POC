import React from "react";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

import ReactGA from "react-ga";

const Layout = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
