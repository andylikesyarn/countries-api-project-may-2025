import { useState, useEffect } from "react";

function CodeToCountry({ cca3 }) {
  const [countryCode, setCountryCode] = useState(cca3);

  useEffect();

  return (
    <div>
      <div>{countryCode}</div>
    </div>
  );
}
