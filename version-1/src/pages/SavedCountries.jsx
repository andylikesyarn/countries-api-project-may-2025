import { useState } from "react";

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

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      [name]: type === "checkbox" ? checked : value,
    }));
    //prevFromData allows us to make a copy of formData, and then add new stuff
    // setFormData(newData) <- old way
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); //changes value of setSubmitted on click.
    /* setFormData({
      name: "",
      appellido: "",
      email: "",
      message: "",
      request: "",
      consent: "",
    });*/
  };

  //https://www.w3schools.com/jsref/event_onsubmit.asp
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor

  return (
    <>
      {submitted ? (
        <p className="result"> Yay! Tu l'as fait!</p>
      ) : (
        //ok logically I knew this would work but it's kind of magical that it actually DID work
        /* based on this : https://stackoverflow.com/questions/43566107/javascript-if-else-on-submit 
      and this: https://www.youtube.com/watch?v=xRKvjWDZlW8
      
      but i wanted to see if i could do it w/ a ternery operator*/
        <form onSubmit={handleSubmit}>
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
            value={formData.email}
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

export default SavedCountries;
