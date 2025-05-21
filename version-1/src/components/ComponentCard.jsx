import { useState } from "react";

function ComponentCard({
  commonCountryName,
  fullCountryName,
  population,
  region,
  capital,
  flag,
  neighbors,
}) {
  //  let cardData = data[0];

  //const [neighborz, setNeighborz] = useState(neighbors);

  return (
    <>
      <div className="card cardd" style={{ width: "250px" }}>
        <div className="flagWrapper" style={{ height: "150px" }}>
          {" "}
          <img src={flag} className="textCenter"></img>
        </div>

        <div style={{ height: "100px" }}>
          {" "}
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
        </p>
      </div>
    </>
  );
}

export default ComponentCard;
