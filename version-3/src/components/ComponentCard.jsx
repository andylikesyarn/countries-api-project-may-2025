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
  onUnsave,
}) {
  ///VARS
  let countryDat = {
    commonCountryName,
    fullCountryName,
    population,
    region,
    capital,
    flag,
    neighbors,
    cca3,
  };

  {
    /*Note that count and onUnsave are props but not part of countryDat. CountryDat includes only the data from the savedCountries object in localStorage/. I made a different count object */
  }

  const [refresh, setRefresh] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [ssavedCountries, setSsavedCountries] = useState([]);

  useEffect(() => {
    const fetchSavedCountries = async () => {
      try {
        const response = await fetch(
          "https://backend-answer-keys.onrender.com/get-all-saved-countries"
        );
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

  /*ssavedCountries = fetch(
          "https://backend-answer-keys.onrender.com/get-all-saved-countries",

          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country_name: countryData.name.common }),
          }
        );*/

  const onClick = async () => {
    try {
      const response = await fetch(
        "https://backend-answer-keys.onrender.com/save-one-country",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country_name: commonCountryName }),
        }
      );
      if (!response.ok) throw new Error("failed to save");
      setRefresh(!refresh);
    } catch (error) {
      console.log("there was an error");
    }
  };

  //remove country from saved countries based on its cca3 code
  /*function unSave(cca3) {
    let savedCountriess =
      JSON.parse(localStorage.getItem("savedCountries")) || []; // //makes var to hold savedCOntries data from LS
    savedCountries = savedCountries.filter((item) => item.cca3 !== cca3);
    //filter and save ONLY items with cca3!==to the CCa3 of the country whose button u just clicked on.
    localStorage.setItem("savedCountries", JSON.stringify(savedCountries)); //set savedCOuntries in Local Storage == to the adjusted val of savedCountries
    setRefresh(!refresh); //set refresh  == to true (it is set to false on card re-render)
    onUnsave && onUnsave(); //do this IF onUnsave exists and is a function
  }*/

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
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capitol: {capital}</p>
      <p>
        Bordering Countries:
        {Array.isArray(neighbors) && neighbors.length > 0
          ? neighbors.join(" ")
          : "none"}
        {/*if neighbors is an array AND has length > 0, 
          join each item w/ a space
          If the length !>0, display text == "none"
           */}
      </p>
      <p>Viewed {count || 0} times.</p>

      {!isSaved && (
        <SaveButton className="pinkButton" text="🤍" onClick={onClick} />
      )}

      {isSaved && <SaveButton className="pinkButton" text="❤️" />}
    </div>
  );
}

export default ComponentCard;
