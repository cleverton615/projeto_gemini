function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value
  
    // Inicializa uma string vazia para armazenar os resultados
    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = ""
    let titulo = ""
    let descricao = ""
    let tags = ""
  
    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Constrói o HTML para cada resultado
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Saiba mais &rarr;</a> </div>`
      } if (!campoPesquisa) { // isso é igual a colocar (campoPesquisa == "")
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
      }
    }
    if (!resultados) { // isso é igual a colocar (resultados == "")
      resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados
  }