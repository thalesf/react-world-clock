import React from "react";
import PropTypes from "prop-types";

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import LayoutWrapper from "./style";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <SearchBar />
      <main style={{ flex: 1, flexDirection: "column" }}>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
