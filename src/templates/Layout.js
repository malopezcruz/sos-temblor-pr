import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../utilities/AddFontAwesome.js';

const Layout = ({ children }) => {
  return (
    <div className="container grid-layout">
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0"
      ></script>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
