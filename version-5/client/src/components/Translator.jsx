import { useState, useEffect } from "react";

export default function Translator({ lang }) {
 
    const english = useState({
    population: "Population",
    region: "Region",
    capital: "Capital",
    neighbors: "Bordering Countries",
    viewed: "Viewed",
    times: "times",
    name: "name",
  });
  const spanish = {
    population: "Población",
    region: "Región",
    capitol: "Capital",
    neighbors: "Países Fronterizos",
    viewed: "Visto",
    times: "veces",
    name: "translations.spa",
  };
  const french = {
    population: "Population",
    region: "Région",
    capital: "Capitale",
    neighbors: "Pays Frontaliers",
    viewed: "Vu",
    times: "fois",
    name: "translations.fra",
  };
  const russian = {
    population: "Население",
    region: "Регион",
    capital: "Столица",
    neighbors: "Соседние страны",
    viewed: "Просмотрено",
    times: "раз",
    name: "translations.rus",
  };

  const [language, setLanguage] = useState();
}
