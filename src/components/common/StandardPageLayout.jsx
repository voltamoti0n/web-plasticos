// src/components/common/StandardPageLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopPage from './ScrollToTopPage';

function StandardPageLayout() {
  return (
    <div className="page-wrapper visible"> {/* Hacemos visible al instante */}
      <ScrollToTopPage />
      <Header />
      <main className="page-content-wrapper">
        <Outlet /> {/* El contenido de cada página (About, Products, etc.) se insertará aquí */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default StandardPageLayout;