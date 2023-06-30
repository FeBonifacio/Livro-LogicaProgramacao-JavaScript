const frm = document.querySelector("form")
const tbFilmes = document.querySelector("table")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const titulo = frm.inTitulo.value
    const genero = frm.inGenero.value

    inserirLinha(titulo, genero) // chama function que insere filmes na tabela
    gravarFilme(titulo, genero)

    frm.reset()
    frm.inTitulo.focus()
})

const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1) //adiciona uma linha na tabela

    const col1 = linha.insertCell(0) //cria colunas na linha inseridas
    const col2 = linha.insertCell(1) 
    const col3 = linha.insertCell(2)

    col1.innerText = titulo
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"
}

const gravarFilme = (titulo, genero) => {
    if (localStorage.getItem("filmesTitulo")) {
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero
        localStorage.setItem("filmesTitulo", filmesTitulo) //grava dados
        localStorage.setItem("filmesGenero", filmesGenero) // em localStorage
    } else {
        // senão é a primeira inclusão, salva se delimitador
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
};

window.addEventListener("load", () => {
    if (localStorage.getItem("filmesTitulo")) {
        const titulos = localStorage.getItem("filmesTitulo").split(";")
        const generos = localStorage.getItem("filmesGenero").split(";")

        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i])
        }
    }
});

tbFilmes.addEventListener("click", (e) => {
    //se a classe do elemento alvo clicado contém exclui
    if (e.target.classList.contains("exclui")) {
        //acesso o "pai do pai" do elemento alvo, o obtém o texto do 1° Filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
            // remove a linha da tabela, correspondente ao símbolo de excluir clicaco
            e.target.paraentElement.paraentElement.remove()

            localStorage.removeItem("filmesTitulo")
            localStorage.removeItem("filmesGenero")

            for (let i = 1; i < tbFilmes.rows.length; i++) {
                //obtem o conteúdo da tabela (coluna0: titulo; coluna 1: gênero)
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText
                const auxGenero = tbFilmes.rows[i].cells[1].innerText
                gravarFilme(auxTitulo, auxGenero)
            }
        }
    }
});