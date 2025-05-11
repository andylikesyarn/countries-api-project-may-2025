import ComponentCard from "../components/ComponentCard";
import localData from "../../localData";

export default function Home() {
  //country list
  const countryList = localData;
  return (
    <div
      className="container cardFormatting"
      style={{

        paddingTop: "5rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem" /* Adds space between cards */,
        justifyContent: "spaceBetween",
      }}
    >
      {localData.map((country, idx) => (
        <div className="row">
          <ComponentCard
            flag={country?.flags?.svg || "undefined"}
            key={idx}
            commonCountryName={country?.name?.common || "undefined"}
            fullCountryName={
              country.name.official === country.name.common
                ? " "
                : country?.name?.official || "undefined"
            }
            population={country?.population || "undefined"}
            region={country?.region || "undefined"}
            capital={country?.capital || "undefined"}
          />
        </div>
      ))}
    </div>
  );
}
