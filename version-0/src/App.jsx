import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";
import Home from "./pages/Home.jsx";

import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top d-flex">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className="nav-item active float-left"
              style={{ paddingLeft: "2rem", textAlign: "left" }}
            >
              <Link to="/">
                <p>Where in the world?</p>
              </Link>
            </li>
            <li
              className="nav-item float-right"
              style={{ paddingLeft: "2rem", textAlign: "right" }}
            >
              <Link to="/savedCountries">
                <p>Saved Countries</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <div className="container">
          <div className="fixed-top m-5 d-flex justify-content-between"></div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countryDetail" element={<CountryDetail />} />
          <Route path="/savedCountries" element={<SavedCountries />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
