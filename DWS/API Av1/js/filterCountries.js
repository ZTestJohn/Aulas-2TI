import CardsList from "./components/CardsList.js";

const form = document.getElementById("filterForm");
const searchBar = document.getElementById("searchBar");
const regionSelect = document.getElementById("regionSelect");
const allCountries = document.getElementById("allCountries");
const numOfCountries = document.getElementById("numOfCountries");

let countriesData = [];

async function fetchCountries() {
  allCountries.innerHTML = `<div class="spinner"><div class="loader"></div></div>`;
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    countriesData = data;
    filterAndRender();
  } catch (error) {
    allCountries.innerHTML = "Erro ao carregar países.";
  }
}

function filterAndRender() {
  const searchValue = searchBar.value.trim().toLowerCase();
  const regionValue = regionSelect.value;

  let filtered = countriesData;

  if (regionValue) {
    filtered = filtered.filter((country) => country.region === regionValue);
  }

  if (searchValue) {
    filtered = filtered.filter((country) => {
      const namePt = country.translations?.por?.common || "";
      const nameEn = country.name?.common || "";
      return (
        namePt.toLowerCase().includes(searchValue) ||
        nameEn.toLowerCase().includes(searchValue)
      );
    });
  }

  allCountries.innerHTML = "";
  numOfCountries.textContent = `${filtered.length} países encontrados`;

  if (filtered.length === 0) {
    allCountries.innerHTML = "<p>Nenhum país encontrado.</p>";
    return;
  }

  CardsList(filtered, allCountries, "country-card");
}

form.addEventListener("submit", (e) => e.preventDefault());
searchBar.addEventListener("input", filterAndRender);
regionSelect.addEventListener("change", filterAndRender);

window.addEventListener("DOMContentLoaded", fetchCountries);