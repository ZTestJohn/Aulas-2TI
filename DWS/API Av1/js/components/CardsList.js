import CreateCards from "./CreateCards.js";
/*
Importa a função CreateCards do arquivo CreateCards.js localizado na mesma pasta.
Isso permite reutilizar a função para criar cartões de países neste módulo.
*/ 

function CardsList(arrayData, pai, cardClass) {
  arrayData.forEach((country) => {
    CreateCards({
      card_class: cardClass,
      country_flag: country.flags.png,
      capital:
        country.capital === undefined ? "Sem capital" : country.capital[0],
      country_name:
        country.translations.por.common === undefined
          ? country.name.common
          : country.translations.por.common,
      container: pai,
      population: country.population,
      region: country.region,
    });
  });
}

/*
A função CardsList recebe três parâmetros:
  arrayData: array com os dados dos países.
  pai: elemento pai (container) onde os cartões serão inseridos.
  cardClass: classe CSS que será aplicada a cada cartão.

Para cada país no arrayData, a função chama CreateCards passando um objeto com as informações necessárias para montar o cartão:
  card_class: classe CSS do cartão.
  country_flag: URL da bandeira do país.
  capital: capital do país (se não houver, exibe "Sem capital").
  country_name: nome do país em português, se disponível; caso contrário, usa o nome comum.
  container: elemento pai onde o cartão será adicionado.
  population: população do país.
  region: região do país.

Assim, a função cria e insere um cartão para cada país no container especificado.
*/

export default CardsList;
