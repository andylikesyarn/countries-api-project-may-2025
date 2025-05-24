import { useState, useEffect } from "react";
import ComponentCard from "../components/ComponentCard";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
  const { name } = useParams(); //pulls name from url
  //tutorial: https://www.geekster.in/articles/useparams-hooks-in-react/
  //more confusing but still useful tutorial: https://reactrouter.com/api/hooks/useParams
  //this was the first one i looked up and

  const [country, setCountry] = useState(null);
  //set country state (so we know if it doesn't work)
  useEffect(() => {
    const getData = async () => {
      const url = `https://restcountries.com/v3.1/name/${name}`;
      try {
        const response = await fetch(url); //set response equal to async fetch
        if (!response.ok) {
          //if response bad
          throw new Error(`Response status: ${response.status}`);
          //throw error explaining response status
        }
        const json = await response.json(); //set var named jason == to response.json (possible for this to incl. multiple countries)
        const countryData = json[0]; //set countryData = to ONLY the first one
        setCountry(countryData);
        let countryViews = //setcountryviews HERE IN API CALL
          JSON.parse(localStorage.getItem("CountryViews")) ||
          {}; /*set countryViews == to parsed data from logal storage
          object named CountryViews, and if there is none, set it == to an empty object
  
          this creates a countryVIews object if there is not one already*/
        countryViews[countryData.name.common] =
          (countryViews[countryData.name.common] || 0) + 1;
        //set countryViews for THIS country == to either preexisting val + 1 OR sets initial val of 0+1.
        //this means if a country has not been viewed, IT IS NOT IN THE LIST YET.
        localStorage.setItem("CountryViews", JSON.stringify(countryViews));
        //setCountryViews again by stringifying the object we just altered and settting it == to the prior version of the object
      } catch (error) {
        console.error(error.message); //if error, console.log error message
      }
    };
    getData(); //THEN run getData
  }, [name]); //name is the only dependency

  if (!country) {
    return <div>Loading...</div>;
  } //if country is undefnined, show load screen
  const countryViews = JSON.parse(localStorage.getItem("CountryViews")) || {};
  //these go below theerror check, bc they won't work if the country is null.
  //countryViews is now pulled back from the JSON
  const count = countryViews[country.name.common] || 0;
  //and we display EITHER the count or 0
  /*change goes in API and var call goes out here becuase I DO NOT want it to increment if the page does not render. */

  return (
    <div
      className="container cardFormatting"
      style={{
        paddingTop: "5rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "space-between",
      }}
    >
      <div className="row">
        <ComponentCard
          flag={country?.flags?.svg || "undefined"}
          commonCountryName={country?.name?.common || "undefined"}
          fullCountryName={
            country?.name?.official === country?.name?.common
              ? " "
              : country?.name?.official || "undefined"
          }
          population={country?.population || "undefined"}
          region={country?.region || "undefined"}
          capital={country?.capital?.[0] || "undefined"}
          neighbors={country?.borders || "none"} //this needs formatting for the case where there are bordering countries.
          count={count}
          cca3={country?.cca3 || "undefined"} //otherwise this is the same as other places I've commented it out, so Idk what else to add.
        />
      </div>
    </div>
  );
}
