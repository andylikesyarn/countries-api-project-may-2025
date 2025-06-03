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

function App() {
  ///
  //DAY/NIGHT MODE vars
  //
  //set vars == to image path for day and night image in slider/
  const day = "/assets/images/day.png";
  const night = "/assets/images/night.png";
  //var for night mode toggle
  const [isDaytime, setIsDaytime] = useState(true);
  //

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
  ////FUNCTIONS
  //
  //pull userData from local storage (this ensures the app is rendered w/ existing storedc countries displayed with a red heart. )
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUserDat(userData);
  }, []);

  //this runs the API call and sets the resulting data == to countryList.
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
      }
    };
    getData();
    console.log(countryList); //run getData
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
