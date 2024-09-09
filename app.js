const inputPesquisa = document.querySelector("input[type='text']");
const botaoPesquisa = document.querySelector("button");
const resultadosPesquisa = document.querySelector(".resultados-pesquisa");

botaoPesquisa.addEventListener("click", () => {
  const termoPesquisa = inputPesquisa.value.toLowerCase();

  const jogosFiltrados = dados.filter(jogo => {
    return jogo.titulo.toLowerCase().includes(termoPesquisa) || jogo.descrição.toLowerCase().includes(termoPesquisa);
  });

  resultadosPesquisa.innerHTML = ''; 

  jogosFiltrados.forEach(jogo => {
    const divJogo = document.createElement("div");
    divJogo.classList.add("item-resultado");
    divJogo.innerHTML = `
        <h2>
            <a href="${jogo.link}" target="_blank">${jogo.titulo}</a>
        </h2>
        <p class="descriçao-meta">${jogo.descrição}</p>
        <a href="${jogo.link}" target="_blank">Mais informações</a>
    `;
    resultadosPesquisa.appendChild(divJogo);
  });
});