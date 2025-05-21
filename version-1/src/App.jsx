import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";

import Home from "./pages/Home.jsx";
import Slider from "./components/Slider.jsx";

import { useState, useEffect } from "react";

function App() {
  const day = "/assets/images/day.png";
  const night = "/assets/images/night.png";
  //var for night mode toggle
  const [isDaytime, setIsDaytime] = useState(true);
  const [countryList, setCountryList] = useState([]); //creates empty country list
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      //setting up asynch function
      const url = "https://restcountries.com/v3.1/all"; //replace this line based on api url
      // above line sets api endpoint
      // also this is what I need to fix for dynamic url,then that needs to go into router.
      try {
        const response = await fetch(url); //make fetch happen; const = result of fetching url
        if (!response.ok) {
          //checks if response not successful
          throw new Error(`Response status: ${response.status}`); //give response status if response not successful
        }
        const json = await response.json(); //var named json is set equal to val of response (eg the data)
        setCountryList(json); //replace this line based on var storing data
        //above line saves data output to var holding country list through setter function
      } catch (error) {
        console.error(error.message); //error handling part 2, generates error in console.
        setData(json);
      }
    };
    getData(); //run getData
  }, []); //and there are no dependencies.

  /*function CodeToCountry(code) {
    for (country in countryList)
    
  }*/
  //function to toggle day/night
  function handleBackgroundToggle() {
    setIsDaytime((prev) => !prev);
  }
  return (
    <BrowserRouter>
      <div className={isDaytime ? "day" : "night"}>
        {" "}
        <div className={isDaytime ? "day" : "night"}>
          {" "}
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top d-flex">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                <li>
                  {" "}
                  <form class="form-inline">
                    {" "}
                    <input
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </li>
                <li>
                  {" "}
                  <Slider
                    backgroundImage={night}
                    altBackgroundImage={day}
                    isActive={isDaytime}
                    onToggle={handleBackgroundToggle}
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <div className="container">
            <div className="fixed-top m-5 d-flex justify-content-between"></div>
          </div>

          <Routes>
            <Route path="/" element={<Home countryList={countryList} />} />
            <Route path="/countryDetail/:name" element={<CountryDetail />} />
            <Route path="/savedCountries" element={<SavedCountries />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
