import { useState, useEffect } from "react";
import ComponentCard from "../components/ComponentCard";
import SingleCountryCall from "../components/SingleCountryCall.jsx";

function Form() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    apellido: "",
    email: "",
    message: "",
    type: "",
    consent: "",
  });

  useEffect(() => {
    const fetchSavedCountries = async () => {
      try {
        const response = await fetch("/api/get-all-saved-countries", {
          method: "GET",
        });
        if (!response.ok) throw new Error("Failed to fetch saved countries");
        const data = await response.json();
        setSavedCountries(data);
      } catch (error) {
        console.error("Error fetching saved countries:", error);
      }
    };
    fetchSavedCountries();
  }, []);

  console.log(SavedCountries);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); //changes value of setSubmitted on click.
    localStorage.setItem("userData", JSON.stringify(formData));
  }; //func that adds user data to localStorage, and sets submitted val to true

  console.log(savedCountries);

  return (
    <>
      {submitted ? (
        <p className="result"> Yay! Tu l'as fait!</p>
      ) : (
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
    </>
  );
}

export default Form;
