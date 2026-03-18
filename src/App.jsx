import React from "react";
import { Home, About, Services,Blog, Contact } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
