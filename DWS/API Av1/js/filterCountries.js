import CardsList from "./components/CardsList.js";

const form = document.getElementById("filterForm");
const searchBar = document.getElementById("searchBar");
const regionSelect = document.getElementById("regionSelect");
const allCountries = document.getElementById("allCountries");
const numOfCountries = document.getElementById("numOfCountries")
let countriesData = [];

/*
form: Seleciona o formulário de filtro.
searchBar: Seleciona o campo de busca onde o usuário digita o nome do país.
regionSelect: Seleciona o campo de seleção de região.
allCountries: Seleciona o container onde os cartões dos países serão exibidos.
numOfCountries: Seleciona o elemento onde será exibido o número de países encontrados.
countriesData: Declara uma variável global que irá armazenar o array com os dados de todos os países carregados da API
*/

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

/*
1º:
  allCountries.innerHTML = `<div class="spinner"><div class="loader"></div></div>`;
  Exibe um spinner (indicador de carregamento) no container de países enquanto os dados estão sendo carregados.
2º:
  try {} catch (error) {}
  Usa um bloco try/catch para tratar possíveis erros durante a requisição dos dados.
3º:
  response: Faz uma requisição assíncrona para a API que retorna os dados de todos os países.
  data: Converte a resposta da API para um array de objetos JavaScript.

4º:
  countriesData = data: Armazena os dados recebidos na variável global countriesData para uso posterior nos filtros.
5º:
  filterAndRender(): Chama a função filterAndRender para exibir os países na tela, já aplicando os filtros atuais (se houver).
6º:
  catch (error) {}
  Se ocorrer algum erro durante a requisição ou processamento, exibe a mensagem "Erro ao carregar países." no container.
*/

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

/*
1º:
  const searchValue = searchBar.value.trim().toLowerCase();
  Pega o valor digitado na barra de busca, remove espaços extras e converte para minúsculo.
  const regionValue = regionSelect.value: Pega o valor da região selecionada no select.

2º:
  let filtered = countriesDat: Cria uma variável filtered que inicialmente recebe todos os países carregados.

3º:
  if (regionValue) {}
  Se uma região foi selecionada, filtra o array para manter apenas os países daquela região.

4º:
  if (searchValue) {}
  Se há texto na barra de busca, filtra o array para manter apenas os países cujo nome (em português ou inglês) inclui o texto digitado.
5º:
  allCountries.innerHTML = "": Limpa o container de países antes de exibir os resultados filtrados.
  numOfCountries.textContent = `${filtered.length} países encontrados`;
  Atualiza o elemento com a quantidade de países encontrados após o filtro.

6º:
  if (filtered.length === 0) {}
  Se nenhum país foi encontrado após o filtro, exibe a mensagem "Nenhum país encontrado." e encerra a função.

7º:
  CardsList(filtered, allCountries, "country-card");
  Se houver países filtrados, chama a função CardsList para criar e exibir os cartões desses países no container.
*/

form.addEventListener("submit", (e) => e.preventDefault());
searchBar.addEventListener("input", filterAndRender);
regionSelect.addEventListener("change", filterAndRender);
/*
form.addEventListener("submit", (e) => e.preventDefault());
  Impede o envio padrão do formulário para não recarregar a página.

searchBar.addEventListener("input", filterAndRender);
  Sempre que o usuário digitar algo na barra de busca, chama a função filterAndRender para atualizar a lista de países exibidos.

regionSelect.addEventListener("change", filterAndRender);
  Sempre que o usuário mudar a região selecionada, chama a função filterAndRender para atualizar a lista de países exibidos.
*/

window.addEventListener("DOMContentLoaded", fetchCountries);
/*
Adiciona um ouvinte de evento para o carregamento do DOM, isso garante que a função fetchCountries seja chamada assim que o DOM estiver totalmente carregado, para que a manipulação do DOM ocorra de forma segura, após isso executa a função.
*/