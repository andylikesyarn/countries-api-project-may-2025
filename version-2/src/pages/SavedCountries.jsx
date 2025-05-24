import { useState } from "react";
import ComponentCard from "../components/ComponentCard";

function SavedCountries() {
  const [submitted, setSubmitted] = useState(false); //this sets the initial value to false, so we don't render the wrong component.

  const [formData, setFormData] = useState({
    name: "",
    apellido: "",
    email: "",
    message: "",
    type: "",
    consent: "",
  });

  const [refresh, setRefresh] = useState(false);

function refreshList() {
    setRefresh(!refresh);
  };//my logic here was rthat if i set refresh to false
//I would then be able to set it to true and refresh on change.
//however i didn't realize react wld automatically re-render on change
  //and MUST have built a dependency to this defunct function in SOMEWHEre bc the function breaks if I remove it. 
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      [name]: type === "checkbox" ? checked : value,
    }));
    //prevFromData allows us to make a copy of formData, and then add new stuff
    // setFormData(newData)
    //this is from an old form i imported from last semester and idk if it's all still needed but am scared to take it out.
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); //changes value of setSubmitted on click.
    localStorage.setItem("userData", JSON.stringify(formData));
  }; //func that adds user data to localStorage, and sets submitted val to true

  const getData = () => {
    const data = localStorage.getItem("savedCountries");
    return data ? JSON.parse(data) : [];
  }; //pulls saved countries from LS.
  // If data exists, parses JSON into array or
  // if data !exist, returns emoty array.
  //

  const countries = getData();
  //sets countries == to result of GetData: array of countries if SavedCountries exists in LS
  //or an empty array if it does not.

  //https://www.w3schools.com/jsref/event_onsubmit.asp
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor
  //^sourecs that helped

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
        {countries.map((country) => (
          <div className="row" key={country.cca3 || country.commonCountryName}>
            <ComponentCard
              flag={country.flag}
              commonCountryName={country.commonCountryName}
              fullCountryName={country.fullCountryName}
              population={country.population}
              region={country.region}
              capital={country.capital}
              neighbors={country.neighbors}
              cca3={country.cca3}
              onUnsave={refreshList}
            />
          </div>
        ))}
        {/*Above code passes vars to component card from savedCountries list to render only
        saved countries on this page */}
      </div>

      {submitted ? (
        <p className="result"> Yay! Tu l'as fait!</p>
      ) : (
        //ok logically I knew this would work but it's kind of magical that it actually DID work
        /* based on this : https://stackoverflow.com/questions/43566107/javascript-if-else-on-submit 
      and this: https://www.youtube.com/watch?v=xRKvjWDZlW8
      
      but i wanted to see if i could do it w/ a ternery operator*/
        <form className="userForm" onSubmit={handleSubmit}>
          <br></br>
          <label htmlFor="name">Nombre y Appellido</label>

          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>

          <br></br>
          <label htmlFor="country">Correo Electrónico</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          <br></br>
          <label>País</label>
          <input
            required
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          ></input>
          <br></br>
          <label className="left" htmlFor="message">
            Biografía{" "}
          </label>
          <br></br>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            cols="50"
          ></textarea>
          <br></br>
          <br></br>
          <input type="submit"></input>
        </form>
      )}
      {/*form recycled from last semester's help requestform w/ some changes */}
    </>
  );
}

export default SavedCountries;
