import ComponentCard from "../components/ComponentCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ countryList }) {
  //country list

  return (
    <div
      className="container cardFormatting"
      style={{
        paddingTop: "5rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "space-between",
      }}
    >
      {countryList.map((country, id) => (
        <div className="row" key={id}>
          <Link
            to={`/countryDetail/${country.name.common}`}
            className="text-decoration-none" 
            key={country.cca3}
          >
            {" "}
            <ComponentCard
              flag={country?.flags?.svg || "undefined"} //||undefined displays "undefined" if for some reason the code can't pull up one of these values. the ? are error handling.
              commonCountryName={country?.name?.common || "undefined"}
              fullCountryName={
                country.name.official === country.name.common
                  ? " " //adds full name only if full name =/= common name
                  : country?.name?.official || "undefined"
              }
              population={country?.population || "undefined"} //adds population unless undefined
              region={country?.region || "undefined"} //adds region unless undefined
              capital={country?.capital || "undefined"} //adds capital unless undefined
              neighbors={country?.borders || "none"} //this needs formatting for the case where there are bordering countries.
            ></ComponentCard>
          </Link>
        </div>
      ))}
    </div>
  );
}
