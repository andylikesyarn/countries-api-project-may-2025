import ComponentCard from "../components/ComponentCard";

export default function Home({ countryList, userName }) {
  const countryViews = JSON.parse(localStorage.getItem("CountryViews")) || {};
  //pulls up either countryviews# or empty obj if no countries have been saved.

  return (
    <div>
      <div id="buttonBox"></div>
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
        {countryList.map((country, id) => {
          //map country and id in COuntryList
          const count = countryViews[country.name.common] || 0;
          //count == val in country Views if it exists
          //or 0 if it does not
          return (
            <div className="row" key={country.cca3}>
              <ComponentCard
                flag={country?.flags?.svg || "undefined"} //pass flag or undefined as prop value
                commonCountryName={country?.name?.common || "undefined"} //pass country name or undefined as prop value
                fullCountryName={
                  country.name.official === country.name.common
                    ? " "
                    : country?.name?.official
                } //if countryname official = country name common, set this prop == to " ", else == to official country name
                population={country?.population || "undefined"}
                //pass country pop or undefined as prop value
                region={country?.region || "undefined"}
                //pass country region or undefined as prop value
                capital={country?.capital || "undefined"}
                //pass country capital or undefined as prop value
                //this is not set up for countryies w/ 2 capitals
                neighbors={country?.borders || "none"}
                //pass country border list or undefined as prop value
                cca3={country?.cca3 || "undefined"}
                //pass country cca3 or undefined as prop value
                count={count}
                //pass view count: error handling happens in var assignment up top so no ternary statement needed.
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
