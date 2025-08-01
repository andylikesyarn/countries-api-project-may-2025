import "./App.css";
//react imports
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//page imports
import CountryDetail from "./pages/CountryDetail.jsx";
import Home from "./pages/Home.jsx";
//component imports
import Slider from "./components/Slider.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";
import localData from "./localData";

function App() {
  ///
  //DAY/NIGHT MODE vars
  //
  //set vars == to image path for day and night image in slider/
  const day = "/assets/images/day.png";
  const night = "/assets/images/night.png";
  //var for night mode toggle
  const [isDaytime, setIsDaytime] = useState(true);
  //More countries

  ///
  //Make vars for data
  //
  //creates empty country list array var
  const [countryList, setCountryList] = useState([]);
  //creates var to hold userdata array var
  const [userDat, setUserDat] = useState([]);
  //creates a string var to hold search input from the esearch button.
  const [searchInput, setSearchInput] = useState("");

  //

  const languageOptions = {
    english: {
      population: "Population",
      region: "Region",
      capital: "Capital",
      neighbors: "Bordering Countries",
      viewed: "Viewed",
      times: "times",
      asia: "Asia",
      africa: "Africa",
      oceania: "Oceania",
      europe: "Europe",
      antarctic: "Antarctic",
    },
    spanish: {
      population: "Población",
      region: "Región",
      capital: "Capital",
      neighbors: "Países Fronterizos",
      viewed: "Visto",
      times: "veces",
      name: "translations.spa",
      asia: "Asia",
      africa: "África",
      oceania: "Oceanía",
      europe: "Europa",
      antarctic: "Antártida",
      none: "ningunos",
    },
    french: {
      population: "Population",
      region: "Région",
      capital: "Capitale",
      neighbors: "Pays Frontaliers",
      viewed: "Vu",
      times: "fois",
      name: "translations.fra",
      asia: "Asie",
      africa: "Afrique",
      oceania: "Océanie",
      europe: "Europe",
      antarctic: "Antarctique",
      none: "aucun",
    },
    russian: {
      population: "Население",
      region: "Регион",
      capital: "Столица",
      neighbors: "Соседние страны",
      viewed: "Просмотрено",
      times: "раз",
      name: "translations.rus",
      asia: "Азия",
      africa: "Африка",
      oceania: "Океания",
      europe: "Европа",
      antarctic: "Антарктида",
      none: "никто",
    },
  };

  const [language, setLanguage] = useState("english");
  const labels = languageOptions[language];

  ////FUNCTIONS
  //
  //adjust userdata to come from api rather than from localstorage
  /*useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUserDat(userData);
  }, []);*/

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch(
          "/api/get-latest-user", //specify correct endpoint
          {
            method: "GET", //specify method
          }
        );
        if (!response.ok) throw new Error("Failed to fetch user's name");
        //error bound if it doesn't work
        const data = await response.json();
        //set data == to response
        setUserDat(data);
        //  set saved countries set == to data.
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };
    fetchUserName();
  }, [language]);

  //this runs the API call and sets the resulting data == to countryList.
  useEffect(() => {
    const getData = async () => {
      //setting up asynch function
      const url =
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,borders,translations";
      // above line sets api endpoint
      try {
        const response = await fetch(url); //make fetch happen; const = result of fetching url
        if (!response.ok) {
          //checks if response not successful
          throw new Error(`Response status: ${response.status}`); //give response status if response not successful
        }
        const json = await response.json(); //var named json is set equal to val of response (eg the data)
        setCountryList([...json, ...localData]); //replace this line based on var storing data
        //above line saves data output to var holding country list through setter function
      } catch (error) {
        console.error(error.message); //error handling part 2, generates error in console.
      }
    };
    getData();
    console.log(countryList);
    //run getData
  }, []); //and there are no dependencies.

  /*function CodeToCountry(code) {
    for (country in countryList)
    
  }*/
  //function to toggle day/night
  function handleBackgroundToggle() {
    //basically means : flip the preexisting value to true if false and false if true.
    setIsDaytime((prev) => !prev);
  }

  return (
    <BrowserRouter>
      {/* sets day vs. night class: If it's daytime (isDaytime == true), 
    className = "day", else className = "night"
*/}
      <div className={isDaytime ? "day" : "night"}>
        {/* sets day vs. night class: If it's daytime (isDaytime == true), 
    className = "day", else className = "night"
*/}
        <div className={isDaytime ? "day" : "night"}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
            {/* creat navbar w/ bootstrap classes: the existing classes do the gollowing:
            navbar =  gives navbar formatting
            navbar-expand-lg = makes navbar behave differently on diff screen sizes
            navbar-light = gives light color theme
            bg-light = also gives light color theme
            d-flex = maes navbar flex onject
            */}

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/*div creates hamburger menu*/}
              <ul className="navbar-nav mr-auto">
                {" "}
                {/*makes ul items navbar items*/}
                <li
                  className="nav-item active float-left"
                  style={{ paddingLeft: "2rem", textAlign: "left" }}
                >
                  <Link to="/" countrylist={countryList}>
                    {/* Home link*/}
                    <p>Where in the world?</p>
                    {/*Home link text */}
                  </Link>
                </li>
                <li
                  className="nav-item float-right"
                  style={{ paddingLeft: "2rem", textAlign: "right" }}
                >
                  <Link to="/savedCountries">
                    {/* Saved Countries Link*/}
                    <p>Saved Countries</p>
                    {/*Saved Countries Link text*/}
                  </Link>
                </li>
                <li>
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  {/* search input receiver */}
                  <Link
                    to={`/countryDetail/${searchInput}`}
                    className="btn btn-outline-success my-2 my-sm-0"
                    style={{ display: "inline-block", marginLeft: "0.5rem" }}
                  >
                    {/* link that uses search input to navigate to a specific country dtail page*/}
                    Search
                  </Link>
                </li>
                <li>
                  {" "}
                  <Slider
                    backgroundImage={night}
                    altBackgroundImage={day}
                    isActive={isDaytime}
                    onToggle={handleBackgroundToggle}
                  />{" "}
                  {/*sets params that make the UI work for night/day mode */}
                </li>
                <li>
                  <select
                    id="language-select"
                    name="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="english">English</option>
                    <option value="spanish">Español</option>
                    <option value="french">Français</option>
                    <option value="russian">Русский</option>
                  </select>
                </li>
                <li style={{ paddingLeft: "3rem" }}>
                  {" "}
                  <h1>Welcome, {userDat?.name || "Explorer"} </h1>{" "}
                  {/*sets greeting based on name, or sets name == "explorer so there's sitll a greeting if the form hasn't been filled out.*/}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <div className="container">
            {/*this is where we put the page content */}
            <div className="fixed-top m-5 d-flex justify-content-between"></div>
          </div>

          <Routes>
            {" "}
            {/*sets up routes */}
            <Route
              path="/"
              element={
                <Home
                  countryList={countryList}
                  labels={labels}
                  language={language}
                  data={countryList}
                />
              }
            />
            <Route
              path="/countryDetail/:name"
              element={<CountryDetail labels={labels} data={countryList} />}
            />
            <Route
              path="/savedCountries"
              element={<SavedCountries labels={labels} data={countryList} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
