//import data from "./data.js";

function ComponentCard({
  commonCountryName,
  fullCountryName,
  population,
  region,
  capital,
  flag,
}) {
  //  let cardData = data[0];

  return (
    <>
      <div className="card cardd" style={{ width: "250px" }}>
        <img
          src={flag}
          className="textCenter"
          style={{ height: "150px", backgroundColor: "aliceBlue" }}
        ></img>
        <div style={{ height: "100px", backgroundColor: "aliceBlue" }}>
          {" "}
          <h3>{commonCountryName}</h3>
          <p>{fullCountryName}</p>
        </div>

        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capitol: {capital}</p>
      </div>
    </>
  );
}

export default ComponentCard;
