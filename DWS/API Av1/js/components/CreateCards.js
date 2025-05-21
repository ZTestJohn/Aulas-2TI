/*
Geral:

Palavras chave:
let: Declara uma variável que pode ter seu valor alterado depois.
const: Declara uma variável cujo valor não pode ser reatribuído. Usada para valores constantes ou objetos que não serão reatribuídos.
function: Define uma função, um bloco de código reutilizável.
return: Encerra a execução de uma função e pode retornar um valor.
if: Estrutura condicional, executa um bloco de código se a condição for verdadeira.
else: Executa um bloco alternativo se a condição do if for falsa.
async: Define uma função assíncrona, que pode usar await para operações assíncronas.
await: Pausa a execução da função async até que a Promise seja resolvida.
try/catch: Bloco para tratar erros em operações que podem falhar.
forEach: Método de array para executar uma função para cada elemento do array.
import/export: Importa ou exporta módulos/funções/objetos entre arquivos.
export default: utilizado para exportar uma função como exportação padrão do módulo. Isso permite que outros arquivos importem essa função diretamente, facilitando o reuso do código.
document: Objeto global que representa o documento HTML atual.
console: Objeto global para exibir mensagens no console do navegador.

Operadores:
=: Atribuição de valor a uma variável.
===: Comparação estrita (valor e tipo).
!==: Diferença estrita (valor e tipo).
? :: Operador ternário, condicional em uma linha (condição ? valorSeVerdadeiro : valorSeFalso).
.: Acesso a propriedades de objetos.
||: Operador "ou" lógico, retorna o primeiro valor verdadeiro.
&&: Operador "e" lógico, retorna o valor se ambos forem verdadeiros.

Símbolos de pontuação:
;: Finaliza instruções.
,: Separa itens em listas, argumentos de funções, propriedades de objetos.
(): Usado para agrupar argumentos de funções e precedência de operações.
{}: Delimita blocos de código (funções, objetos, estruturas de controle).
[]: Usado para arrays e acesso a índices ou propriedades dinâmicas.

Aspas e crases:
"" e '': Usadas para definir strings simples (texto).
`` (crases): Usadas para template strings, permitindo interpolação de variáveis com ${} e múltiplas linhas.

Valores:
Números: Usados para populações, contagem de países, etc.
Strings: Textos como nomes de países, regiões, mensagens de erro, HTML.
Booleanos: Resultados de comparações.
Arrays: Listas de países, capitais, etc.
Objetos: Dados de países, parâmetros de funções, elementos do DOM.
null/undefined: Representam ausência de valor ou valor não definido.
*/

function CreateCards({
  card_class,
  country_flag,
  country_name,
  capital,
  region,
  population,
  container,
}) {
  /*
O nome "CreateCards" foi escolhido porque a função serve para criar cartões de cada país.
Os parâmetros aqui são passados usando a desestruturação de objeto para facilitar o uso.
Parâmetros (são autoexplicativos):
  card_class: Classe CSS do cartão.
  country_flag: URL da bandeira do país.
  country_name: Nome do país.
  capital: Capital do país.
  region: Região do país.
  population: População do país.
  container: Elemento pai que receberá o cartão.
Esses nomes foram escolhidos para serem autoexplicativos e facilitar a leitura do código.
*/

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
O bloco da função começa criando a constante card, que recebe um elemento HTML <div>, esse será o cartão do país. O método classList.add adiciona a classe CSS recebida pelo parâmetro card_class, permitindo a estilização do cartão.

O conteúdo do cartão é definido usando innerHTML, com uma template string que monta a estrutura:
  - <img src="${country_flag}" alt="Imagem da badeira">: Mostra a bandeira do país, usando o parâmetro country_flag.
  - <h2>${country_name}</h2>: Exibe o nome do país.
  - <h3><i class="bi bi-geo-alt"></i> Capital: ${capital}</h3>: Exibe a capital, com ícone de localização.
  - <p><i class="bi bi-map"></i> Região: ${region}</p>: Exibe a região, com ícone de mapa.
  - <p><i class="bi bi-people"></i> População: ...</p>: Exibe a população, formatando o número para o padrão brasileiro com toLocaleString("pt-BR"). Se a população for zero, mostra "Nenhum habitante".

toLocaleString("pt-BR"): Este método é utilizado para formatar o número de habitantes para o padrão brasileiro, ou seja, com ponto como separador de milhar e vírgula como separador decimal.

Após isso, temos o método appendChild que é utilizado para adicionar o cartão criado dentro do elemento container que foi passado como parâmetro para a função.
*/

export default CreateCards;