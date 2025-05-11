import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function CountryCardList() {
  return (
    <div className="container">
      <image src="" alt="flag not displaying"></image>
      <h2>CountryName</h2>
      <ul>
        <li className="population">
          <span>Population:</span>number
        </li>
        <li className="region">
          <span>Region:</span>region
        </li>
        <li className="capital">
          <span>Capitol:</span>capitol
        </li>
      </ul>
    </div>
  );
}

export default CountryCardList;
