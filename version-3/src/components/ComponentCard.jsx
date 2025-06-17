import { useState, useEffect } from "react";
import SaveButton from "./SaveButton";
import { Link } from "react-router-dom";

function ComponentCard({
  commonCountryName,
  fullCountryName,
  population,
  region,
  capital,
  flag,
  neighbors,
  cca3,
  count,
  classes,
}) {
  ///VARS

  {
    /*Note that count and onUnsave are props but not part of countryDat. CountryDat includes only the data from the savedCountries object in localStorage/. I made a different count object */
  }

  const [refresh, setRefresh] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [ssavedCountries, setSsavedCountries] = useState([]);

  const [english, setEnglish] = useState([
    "Population",
    "Region",
    "Capital",
    "Bordering Countries",
    "Viewed",
    "times",
  ]);
  const spanish = [
    "Población",
    "Región",
    "Capital",
    "Países Fronterizos",
    "Visto",
    "veces",
  ];
  const french = [
    "Population",
    "Région",
    "Capitale",
    "Pays Frontaliers",
    "Vu",
    "fois",
  ];
  const russian = [
    "Население",
    "Регион",
    "Столица",
    "Соседние страны",
    "Просмотрено",
    "раз",
  ];

  const [language, setLanguage] = useState(english);

  useEffect(() => {
    const fetchSavedCountries = async () => {
      try {
        const response = await fetch("/api/get-all-saved-countries");
        if (!response.ok) throw new Error("Failed to fetch saved countries");
        const data = await response.json();
        setSsavedCountries(data);
        // Check if this country is saved
        setIsSaved(data.some((c) => c.country_name === commonCountryName));
      } catch (error) {
        console.error("Error fetching saved countries:", error);
      }
    };
    fetchSavedCountries();
  }, [refresh, commonCountryName]);

  const onClick = async () => {
    try {
      const response = await fetch(
        "/api/save-one-country",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country_name: commonCountryName }),
        }
      );
      if (!response.ok) throw new Error("failed to save");
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log("there was an error");
    }
  };

  return (
    <div className="card cardd" style={{ width: "250px" }}>
      {/*this line had a bg color that was why i couldn't get my card formatting to change w/ day/night mode */}
      <div className="flagWrapper" style={{ height: "150px" }}>
        <Link
          to={`/countryDetail/${commonCountryName}`}
          className="text-decoration-none"
        >
          <img src={flag} className="textCenter" alt="flag" />
        </Link>
        {/*makes the flag into a link */}
      </div>
      <div style={{ height: "130px" }}>
        {/*adjusted this bc some of the countries didn't have enough space 4 names */}
        <h3>{commonCountryName}</h3>
        <p>{fullCountryName}</p>
      </div>
      <p>
        {language[0]}: {population}
      </p>
      <p>
        {language[1]}: {region}
      </p>
      <p>
        {language[2]}: {capital}
      </p>
      <p>
        {language[3]}:
        {Array.isArray(neighbors) && neighbors.length > 0
          ? neighbors.join(" ")
          : "none"}
        {/*if neighbors is an array AND has length > 0, 
          join each item w/ a space
          If the length !>0, display text == "none"
           */}
      </p>
      <p className={classes}>
        {language[4]} {count || 0} {language[5]}.
      </p>

      {!isSaved && (
        <SaveButton className="pinkButton" text="🤍" onClick={onClick} />
      )}

      {isSaved && <SaveButton className="pinkButton" text="❤️" />}
    </div>
  );
}

export default ComponentCard;
