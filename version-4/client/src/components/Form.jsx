import { useState } from "react";

function Form() {
  const [submitted, setSubmitted] = useState(false);

  //corrected prior version to match structure of object in API
  const [formData, setFormData] = useState({
    name: "",
    country_name: "",
    email: "",
    bio: "",
  });

  //same from prior version
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/add-one-user", {
        //this uses the api endpoint that adds a user
        method: "POST",
        //specify POST to make sure computer knows we r POSTING this data.
        headers: {
          "Content-Type": "application/json",
          //tells server what it's dealing w/ content-wise
        },
        body: JSON.stringify({
          name: formData.name,
          country_name: formData.country_name,
          email: formData.email,
          bio: formData.bio,
          //^turns form data into stringified version that can be posted 2 the API
          //based on input
        }),
      });
      if (!response.ok) throw new Error("Failed to add user");
      const result = await response.text();
      console.log(result); // message that will display: "Success! User has been added."
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
      {submitted ? (
        <p className="result"> Yay! Tu l'as fait!</p>
      ) : (
        <form className="userForm" onSubmit={handleSubmit}>
          <br></br>
          <label htmlFor="name">Name</label>

          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name} //changed to match API
            onChange={handleChange}
          ></input>

          <br></br>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email} //changed to match API
            onChange={handleChange}
          ></input>
          <br></br>
          <label htmlFor="country_name">País</label>
          <input
            required
            type="text"
            id="country_name"
            name="country_name"
            value={formData.country_name} //changed to match API
            onChange={handleChange}
          ></input>
          <br></br>
          <label className="left" htmlFor="bio">
            Biografía{" "}
          </label>
          <br></br>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio} //changed to match API
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
