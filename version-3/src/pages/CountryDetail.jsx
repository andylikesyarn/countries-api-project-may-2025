import { useState, useEffect } from "react";
import ComponentCard from "../components/ComponentCard";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
  const { name } = useParams(); //pulls name from url
  const [count, setCount] = useState(0);
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
        const json = await response.json(); //set var named json == to response.json (possible for this to incl. multiple countries)
        const countryData = json[0]; //set countryData = to ONLY the first one
        setCountry(countryData);

        //this needs to change to storing in the backend.
        let apiResponse = await fetch(
          "https://backend-answer-keys.onrender.com/update-one-country-count",

          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country_name: countryData.name.common }),
          }
        );
        const apiData = await apiResponse.json();
        console.log("Backend API response:", apiData);
        setCount(apiData.newCount);
      } catch (error) {
        console.error(error.message); //if error, console.log error message
      }
    };
    getData(); //THEN run getData
  }, [name]); //name is the only dependency

  if (!country) {
    return <div>Loading...</div>;
  } //if country is undefnined, show load screen

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
