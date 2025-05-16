import CardsList from "./components/CardsList.js";

async function fecthAllCountries() {
  const numOfCountries = document.getElementById("numOfCountries");
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

    numOfCountries.innerHTML = `${data.length} países encontrados`;

    CardsList(data, allCountries, "country-card");

  } catch (error) {
    console.error(`Erro: ${error.message}`);
    spinner.remove();
  }
}

addEventListener("DOMContentLoaded", fecthAllCountries);