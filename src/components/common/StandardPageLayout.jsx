// src/components/common/StandardPageLayout.jsx
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
// Ya no necesitamos importar Header aquí

const ScrollToTopPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function StandardPageLayout() {
  return (
    <div className="page-wrapper">
      <ScrollToTopPage />
      {/* El Header ahora será responsabilidad de cada página */}
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default StandardPageLayout;