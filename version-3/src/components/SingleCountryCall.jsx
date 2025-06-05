import { useState, useEffect } from "react";
import ComponentCard from "./ComponentCard";

//this component sends a get request for data from EACH country in the savedlist

export default function SingleCountryCall({ name, classes }) {
  const [country, setCountry] = useState(null);
  console.log("single country call: ", name);

  //run api call for 1 country
  useEffect(() => {
    const getData = async () => {
      const url = `https://restcountries.com/v3.1/name/${name}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const countryData = json[0];
        setCountry(countryData); //set country data
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

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
  {/* component card for ONLY the one country */}
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
          neighbors={country?.borders || "none"}
          cca3={country?.cca3 || "undefined"}
          classes={classes}
  {/* class prop lets me make view count invisible if i want to */}
        />
      </div>
    </div>
  );
}
