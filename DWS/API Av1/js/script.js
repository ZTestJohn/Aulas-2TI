import { createCards } from "./createCards.js";

async function fecthAllCountries() {
  const allCountries = document.getElementById("allCountries");

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `<div class="loader"></div>`;
  allCountries.appendChild(spinner);

  const url = "https://restcountries.com/v3.1/all";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Erro na API: ${reposResponse.status}`);
    }

    spinner.remove();

    data.map((country) => {
      createCards({
        card_class: "country-card",
        country_flag: country.flags.png,
        capital: country.capital[0],
        country_name: country.name.common,
        pai: allCountries,
        population: country.population,
        region: country.region,
      });
    });
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    spinner.remove();
  }
}

addEventListener("DOMContentLoaded", fecthAllCountries);