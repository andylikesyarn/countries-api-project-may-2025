import { useState } from "react";
import SaveButton from "./SaveButton";
import { Link } from "react-router-dom";

function ComponentCard({
  commonCountryName,
  fullCountryName,
  population,
  region,
  capital,
  flag,
  neighbors,
  cca3,
  count,
  onUnsave,
}) {
  ///VARS
  let countryDat = {
    commonCountryName,
    fullCountryName,
    population,
    region,
    capital,
    flag,
    neighbors,
    cca3,
  };

  {
    /*Note that count and onUnsave are props but not part of countryDat. CountryDat includes only the data from the savedCountries object in localStorage/. I made a different count object */
  }

  const [refresh, setRefresh] = useState(false);
  // we need to be able to trigger a refresh if user unlikes on saved countries page, so this is where that var lives

  const savedCountries =
    JSON.parse(localStorage.getItem("savedCountries")) || [];
  const isSaved = savedCountries.some((c) => c.cca3 === cca3);
  // Read savedCountries on each render (to reflect localStorage changes)
  /*sets isSaved == to true if there's a country in saved countries w/ the same cca3 as the one in a given card render
==to false if there is NOT a country w/ the same CCA3. this lets us check which button should be displayed in the 
return statement of this component
*/
  //
  //
  //

  //
  ///FUNCTIONS
  //
  function onClick() {
    let savedCountries =
      JSON.parse(localStorage.getItem("savedCountries")) || [];
    //makes var to hold savedCOntries data from LS
    if (
      !savedCountries.some(
        (c) => c.commonCountryName === countryDat.commonCountryName
      )
      /*if there is NO country in saved countries with common name == to 
      the common name of the country associated w/ the card whose button
      was just clicked on*/
    ) {
      //THEN
      savedCountries.push(countryDat); //push the country data on the card to saved countries
      localStorage.setItem("savedCountries", JSON.stringify(savedCountries)); //set the NEW val of savedCountries == to the LS object called SavedCoutries
      setRefresh(true); //set refresh  == to true (it is set to false on card re-render)
    }
  }

  //remove country from saved countries based on its cca3 code
  function unSave(cca3) {
    let savedCountries =
      JSON.parse(localStorage.getItem("savedCountries")) || []; // //makes var to hold savedCOntries data from LS
    savedCountries = savedCountries.filter((item) => item.cca3 !== cca3);
    //filter and save ONLY items with cca3!==to the CCa3 of the country whose button u just clicked on.
    localStorage.setItem("savedCountries", JSON.stringify(savedCountries)); //set savedCOuntries in Local Storage == to the adjusted val of savedCountries
    setRefresh(!refresh); //set refresh  == to true (it is set to false on card re-render)
    onUnsave && onUnsave(); //do this IF onUnsave exists and is a function
  }

  return (
    <div className="card cardd" style={{ width: "250px" }}>
      {/*this line had a bg color that was why i couldn't get my card formatting to change w/ day/night mode */}
      <div className="flagWrapper" style={{ height: "150px" }}>
        <Link
          to={`/countryDetail/${commonCountryName}`}
          className="text-decoration-none"
        >
          <img src={flag} className="textCenter" alt="flag" />
        </Link>
        {/*makes the flag into a link */}
      </div>
      <div style={{ height: "130px" }}>
        {/*adjusted this bc some of the countries didn't have enough space 4 names */}
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
        {/*if neighbors is an array AND has length > 0, 
          join each item w/ a space
          If the length !>0, display text == "none"
           */}
      </p>
      <p>Viewed {count || 0} times.</p>
      {/*sets viewed count. However, bc each item in the 
      object holding view data is not created until the user clicks, it EITHER sets val == to count if count 
      already exists for that country, OR it sets count == to 0 if there is no key/val pair in local storage object corresponding to this country.

      Count is NOT manipulated here, it's ONLY being passed down from the parent. This is because the number should only be
      incremented if the parent is CountryDetail, NOT if the parent is Home, bc we ONLY want to increment when the user clicks
      to a specific country detail, not just when home re-renders
      */}
      {!isSaved && (
        <SaveButton className="pinkButton" text="🤍" onClick={onClick} />
      )}
      {/*if isSaved = false, display the button with the white heart and assign its onClick val as onCLick
      
      this will make it add the item to saved onClick. This logic has to go in this component bc it's
      relevant to EVERY render of each card: user shld always be able to click/unclick*/}
      {isSaved && (
        <SaveButton
          className="pinkButton"
          text="❤️"
          onClick={() => unSave(cca3)}
        />
      )}
      {/*if isSaved = true, display the button with the pink heart and assign it to unsave the item w/ the corresponding cca3
      
      this will make it aremoveddd the item from saved on click. This logic has to go in this component bc it's
      relevant to EVERY render of each card: user shld always be able to click/unclick saved val is set by card, so is calculated and uesd in this component only
      https://legacy.reactjs.org/docs/conditional-rendering.html

      used this tutorial to figure out the logic. I still don't know why I had to turn the second onCLick funcion into an arrow funct when I DIDN't need to do that w/ the onCLick...but also, it might be bc I used a param in one but not the other. I think this is what it is ,idk why I did it that way.
      
      the above strategy only conditionally renders the truthy expression into a button element...it's actually way simpler than what i was doing*/}
    </div>
  );
}

export default ComponentCard;
