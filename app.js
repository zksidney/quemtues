function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value


    if (!campoPesquisa || campoPesquisa == " "){
        section.innerHTML = "Nada foi encontrado. Você precisa digitar o nome de um Candidato"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
        tags = dado.tags.toLowerCase()
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // Cria um novo elemento div para cada resultado, formatando o HTML com as informações do dado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
        }  
    }

    if (!resultados){
        resultados = section.innerHTML = "<p>Nada foi encontrado!</p>"
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }








