import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./contexts/UserContext.jsx";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/page01" element={<Page01 />} />
          <Route path="/page02" element={<Page02 />} />
          <Route path="/page03" element={<Page03 />} />
          <Route path="/page04" element={<Page04 />} />
          <Route path="*" element={<Page04 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
