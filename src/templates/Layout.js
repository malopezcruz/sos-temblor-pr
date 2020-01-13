import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';
import '../utilities/AddFontAwesome.js';

const Layout = ({ children }) => {
  return (
    <div className="container grid-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
