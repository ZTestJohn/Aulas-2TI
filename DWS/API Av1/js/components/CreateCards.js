function CreateCards({
  card_class,
  country_flag,
  country_name,
  capital,
  region,
  population,
  pai,
}) {
  const card = document.createElement("div");
  card.classList.add(card_class);

  card.innerHTML = `
          <img src="${country_flag}" alt="Imagem da badeira">
          <h2>${country_name}</h2>
          <h3><i class="bi bi-geo-alt"></i> Capital: ${capital}</h3>
          <p><i class="bi bi-map"></i> Região: ${region}</p>
          <p><i class="bi bi-people"></i> População: ${
            population === 0
              ? "Nenhum habitante"
              : `${population.toLocaleString("pt-BR")} habitantes`
          }</p>
      `;

  pai.appendChild(card);
}

export default CreateCards;
