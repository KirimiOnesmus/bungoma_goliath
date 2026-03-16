import React,{useEffect}from "react";
import { Outlet, useLocation } from 'react-router-dom'
import { Header, Footer } from "./index";

const Layout = () => {
    const location = useLocation();

      useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
