import CreateCards from "./CreateCards.js";

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
      pai: pai,
      population: country.population,
      region: country.region,
    });
  });
}

export default CardsList;
