import React from "react";
// import PropTypes from "prop-types";

import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <SearchBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

export default Layout;
