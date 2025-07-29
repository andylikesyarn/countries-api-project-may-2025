// Countries API
// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
// Importing our Node modules
import express from "express"; // The framework that lets us easily build a web server
import pg from "pg"; // pg stands for PostgreSQL, for talking to the database
import config from "./config.js"; // we need access to our database connection credentials
// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: config.databaseUrl, // credentials to access the database — keep this private!
  ssl: true, // we will use SSL encryption when connecting to the database
});
const app = express(); // Creating an instance of the express module
app.use(express.json()); // This server will receive and respond in JSON format
const port = 3000; // Declaring which port to listen to to receive requests
// Turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------
// Helper function for /get-all-users
async function getAllUsers() {
  const result = await db.query("SELECT * FROM users");
  console.log(result);
  return result.rows;
}
/*
// Helper function for /get-one-country/:name
async function getOneCountry(countryName) {
  const result = await db.query("SELECT * FROM countries WHERE name = $1", [
    countryName,
  ]);
  return result.rows[0];
}
// Helper function for /delete-one-country/:name
async function deleteOneCountry(name) {
  //sets fields we're inputting / changing
  const countryName = name;
  await db.query("DELETE FROM countries WHERE name = $1", [countryName]);
}

// Helper function for /add-one-country
async function addOneCountry(country) {
  //await result of database query
  await db.query(
    //sql query inserting vals into country
    "INSERT INTO countries (name, category, can_fly, lives_in) VALUES ($1, $2, $3, $4)",
    //
    [country.name, country.category, country.can_fly, country.lives_in]
  );
}
// Helper function for /update-one-country
async function updateOneCountry(name, updatedFields) {
  //sets fields we're inputting / changing
  const { category, can_fly, lives_in } = updatedFields;
  await db.query(
    //update country categories in the following order where name is as specificed
    //sql
    "UPDATE countries SET category = $1, can_fly = $2, lives_in = $3 WHERE name = $4",
    //array needed to insert into sql categories
    [category, can_fly, lives_in, name]
  );
}
*/
// ---------------------------------
// API Endpoints
// ---------------------------------
// GET /get-all-countries
app.get("/get-all-users", async (req, res) => {
  const allUsers = await getAllUsers();
  // res.send(JSON.stringify(allCountries));
  res.json(allUsers);
});
/*
// both functions res.send() and res.json() send a response
// res.send() sends a response as a String
// res.json() sends a response as a JSON object
// GET /get-one-country/:name
app.get("/get-one-country/:name", async (req, res) => {
  //countryName = the name pulled from the url param
  const countryName = req.params.name;
  //set country = to the result of the function getOneCountry
  const country = await getOneCountry(countryName);
  //display result of getOneCountry, wich should be an object with all its attributes
  res.json(country);
});

// GET /delete-one-country/:name
app.delete("/delete-one-country/:name", async (req, res) => {
  //deleteCountry = the name pulled from the url param
  const deleteCountry = req.params.name;
  //run function to delete country asynchronously
  await deleteOneCountry(deleteCountry);
  //then return CountryName was deleted
  res.json(`${deleteCountry} was deleted`);

  /*try {
    await deleteOneCountry(deleteCountry);
    res.json({ success: true, message: "Country deleted." });
  } catch (err) {
    //if it does not work, send error message.
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /add-one-country
app.post("/add-one-country", async (req, res) => {
  //country is pulled from request body and saved here
  const newCountry = req.body;
  //try running addOneCountry
  try {
    await addOneCountry(newCountry);
    //if it works, display Country Added
    res.json({ success: true, message: "Country added." });
  } catch (err) {
    //if it does not work, send error message.
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /update-one-country
//defining a post request at the endpoint update-one-country
app.post("/update-one-country", async (req, res) => {
  //country categories are pulled from request body and saved here
  const { name, category, can_fly, lives_in } = req.body;
  //run helper function, setting aboce var = to the second argument
  try {
    await updateOneCountry(name, { category, can_fly, lives_in });
    //if it works, give country updated
    res.json({ success: true, message: "Country updated." });
  } catch (err) {
    //if it does not work, send error message.
    res.status(400).json({ success: false, error: err.message });
  }
});*/
