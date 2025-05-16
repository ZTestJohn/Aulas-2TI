function CreateCards({
  card_class,
  country_flag,
  country_name,
  capital,
  region,
  population,
  container,
}) 
/*
Este bloco começa com a palavra chave "function" que é utilizada para criar uma função , logo em seguida vem o nome da função "CreateCards" que é o nome que será utilizado para chamar a função, eu ecolhi este nome pois a função da função será criar cartões de cada país.
Em seguida temos os parênteses que são utilizados para passar parâmetros para a função, dentro dos parênteses temos uma desestruturação de objeto que contém as propriedades que serão utilizadas dentro da função, eu escolhi utilizar um objeto para passar os parâmetros pois assim fica mais fácil de se utilizar a função, já que o autocomplete sugere por conta própria os argumentos.
Depois temos os parâmetros:
  card_class: Este argumento é destinado a receber a classe que o cartão terá, esse nome foi escolhido para facilitar entender o que faz;
  country_flag: Este argumento é destinado a receber a bandeira do país, esse nome foi escolhido para facilitar entender o que faz;
  country_name: Este argumento é destinado a receber o nome do país, esse nome foi escolhido para facilitar entender o que faz;
  capital: Este argumento é destinado a receber a capital do país, esse nome foi escolhido para facilitar entender o que faz;
  region: Este argumento é destinado a receber região do país, esse nome foi escolhido para facilitar entender o que faz;
  population: Este argumento é destinado a receber população do país, esse nome foi escolhido para facilitar entender o que faz;
  pai: Este argumento é destinado a receber o elemento pai que irá receber o cartão, esse nome foi escolhido para facilitar entender o que faz;
A função termina com um fechamento de chaves, isso indica que o final do objeto que foi passado como parâmetro, e logo em seguida temos um parênteses que indica o final dos parâmetros.
*/

{
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

  container.appendChild(card);
}

/*
Este bloco começa com uma chave para indicar o início do bloco de código da função, logo em seguida temos a criação de uma variável do tipo const, já que não será alterada, chamada card, nome escolhido para ser intuítivo, já que irá receber um elemento HTML do tipo div, essa div será o cartão que irá conter as informações do país. Isto é feito através do acesso ao objeto global document, que é o objeto que representa o documento HTML, e usa-se o método createElement para criar um novo elemento HTML, neste caso um div (especificado entre parênteses.
Em seguida temos a variável card recebendo uma classe através do método classList.add, que adiciona a classe que foi passada como parâmetro para a função, essa classe será utilizada para estilizar o cartão.
Logo em seguida temos a variável card recebendo um HTML através do método innerHTML, que é utilizado para adicionar conteúdo HTML dentro do elemento card, neste caso o conteúdo HTML é uma string que contém a estrutura do cartão, onde temos:
  <img src="${country_flag}" alt="Imagem da badeira">: Aqui temos uma tag img que irá receber a imagem da bandeira do país, o src recebe a variável country_flag que foi passada como parâmetro para a função, e o alt é uma descrição da imagem, que é importante para acessibilidade.
  <h2>${country_name}</h2>: Aqui temos uma tag h2 que irá receber o nome do país, o conteúdo é passado através da variável country_name que foi passada como parâmetro para a função.
  <h3><i class="bi bi-geo-alt"></i> Capital: ${capital}</h3>: Aqui temos uma tag h3 que irá receber a capital do país, o conteúdo é passado através da variável capital que foi passada como parâmetro para a função, e também temos um ícone de localização utilizando a biblioteca Bootstrap Icons.
  <p><i class="bi bi-map"></i> Região: ${region}</p>: Aqui temos uma tag p que irá receber a região do país, o conteúdo é passado através da variável region que foi passada como parâmetro para a função, e também temos um ícone de mapa utilizando a biblioteca Bootstrap Icons.
  <p><i class="bi bi-people"></i> População: ${population === 0 ? "Nenhum habitante" : `${population.toLocaleString("pt-BR")} habitantes`}</p>: Aqui temos uma tag p que irá receber a população do país, o conteúdo é passado através da variável population que foi passada como parâmetro para a função, e também temos um ícone de pessoas utilizando a biblioteca Bootstrap Icons. Aqui também temos uma verificação utilizando o operador ternário para verficar se a população é igual a zero, se for igual a zero será exibido "Nenhum habitante".
  - toLocaleString("pt-BR"): Este método é utilizado para formatar o número de habitantes para o padrão brasileiro, ou seja, com ponto como separador de milhar e vírgula como separador decimal.

  Após isso, temos o método appendChild que é utilizado para adicionar o cartão criado dentro do elemento container que foi passado como parâmetro para a função.
*/

export default CreateCards;

/*
Este bloco começa com a palavra chave export e default, que é utilizada para exportar o módulo por padrão, logo em seguida temos o nome do módulo que será exportado, neste caso é a função CreateCards, e logo em seguida temos o final do bloco de código com um ponto e vírgula.
*/