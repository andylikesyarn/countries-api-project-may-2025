import { useState, useEffect, labels } from "react";
import ComponentCard from "../components/ComponentCard";
import SingleCountryCall from "../components/SingleCountryCall.jsx";
import Form from "../components/Form.jsx";

function SavedCountries({ data, labels }) {
  //const [submitted, setSubmitted] = useState(false); //this sets the initial value to false, so we don't render the wrong component.
  const [savedCountries, setSavedCountries] = useState([]);

  //this sets the saved countries list to the set of those fetched from the API
  useEffect(() => {
    const fetchSavedCountries = async () => {
      try {
        const response = await fetch(
          "/api/get-all-saved-countries", //specify correct endpoint
          {
            method: "GET", //specify method
          }
        );
        if (!response.ok) throw new Error("Failed to fetch saved countries");
        //error bound if it doesn't work
        const data = await response.json();
        //set data == to response
        setSavedCountries(data);
        //  set saved countries set == to data.
      } catch (error) {
        console.error("Error fetching saved countries:", error);
      }
    };
    fetchSavedCountries();
    //run function
  }, []); //no dependencies.

  return (
    <>
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
        {savedCountries.map((savedCountry) => (
          <div className="row" key={savedCountry.country_name}>
            <SingleCountryCall
              name={savedCountry.country_name}
              classes="display-none"
              labels={labels}
            />
          </div>
        ))}
        {/*Above code passes prop to Single Country Call from savedCountries list to render ONLY saved countries on this page, by mapping saved countries over that component  */}
      </div>
      <Form />
      {/* form imported here as a separate component...too confusing otherwise imo
       */}
    </>
  );
}

export default SavedCountries;
