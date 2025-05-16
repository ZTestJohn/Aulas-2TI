import CardsList from "./components/CardsList.js";
/*
Importa a função CardsList do arquivo CardsList.js localizado na pasta components.
Isso permite reutilizar a função para criar listas de cartões de países neste módulo.
*/ 

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

/*
A função async fecthAllCountries() é responsável por buscar todos os países de uma API e exibir os resultados na página.

1º:
  const numOfCountries = document.getElementById("numOfCountries");
  Seleciona o elemento onde será exibido o número de países encontrados.
  const allCountries = document.getElementById("allCountries");
  Seleciona o container onde os cartões dos países serão inseridos.

2º:
  const spinner = document.createElement("div");
  Cria um elemento <div> para servir de spinner (indicador de carregamento).
  spinner.classList.add("spinner");
  Adiciona a classe CSS "spinner" para estilizar o carregador.
  spinner.innerHTML = `<div class="loader"></div>`;
  Define o conteúdo HTML do spinner.
  allCountries.appendChild(spinner);
  Adiciona o spinner ao container de países, mostrando o carregamento na tela.

3º:
  const url = "https://restcountries.com/v3.1/all";
  Define a URL da API que retorna todos os países.

4º:
  try {} catch (error) {}
  O bloco try executa o código que pode gerar erro, e o catch captura e trata qualquer erro que ocorrer.

5º:
  const response = await fetch(url);
  Faz a requisição à API de forma assíncrona e espera a resposta.
  const data = await response.json();
  Converte a resposta da API para um objeto JavaScript (JSON).

6º:
  if (!response.ok) { throw new Error(); }
  Se a resposta não for bem-sucedida, lança um erro com uma mensagem personalizada.

7º:
  spinner.remove();
  Remove o indicador de carregamento da tela após receber os dados.

8º:
  numOfCountries.innerHTML = `${data.length} países encontrados`;
  Atualiza o elemento com a quantidade de países retornados pela API.

9º:
  CardsList(data, allCountries, "country-card");
  Chama a função CardsList para criar e exibir os cartões de cada país no container.

10º:
  catch (error) {}
  Se ocorrer algum erro durante a requisição ou processamento, exibe o erro no console e remove o spinner da tela.
*/

addEventListener("DOMContentLoaded", fecthAllCountries);
/*
Adiciona um ouvinte de evento para o carregamento do DOM, isso garante que a função fecthAllCountries seja chamada assim que o DOM estiver totalmente carregado, para que a manipulação do DOM ocorra de forma segura, após isso executa a função.
*/