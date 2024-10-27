import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
import Case_Study from "./Pages/Case_Study";
import Employee from "./Pages/HomePage/Employee";
import Business_Section from "./Pages/HomePage/Business_Section";
import Articles from "./Pages/HomePage/Articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Pages/Footer";
import Home_Page from "./Pages/HomePage/Home_Page";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/Blog" element={<Case_Study />} />
        <Route path="/career" element={<Employee />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/Business" element={<Business_Section />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
