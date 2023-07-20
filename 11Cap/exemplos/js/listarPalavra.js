const tbPalavras = document.querySelector("table"); // cria referencia a tabela
const ckMostrar = document.querySelector("input[type='checkbox']"); // e ao checkbox

const montarTabela = () => {
    // se houver dados no localStorage
    if (localStorage.getItem("jogoPalavra")) {
        // obtem conteudo e converte em elementos de vetor na ocorrencia do ;
        const palavras = localStorage.getItem("jogoPalavra").split(";");
        const dicas = localStorage.getItem("jogoDica").split(";");

        // percorre elementos do vetor e os insere na tabela
        for (let i = 0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1); // Adiciona uma linha na tabela

            const col1 = linha.insertCell(0); // cria colunas na linha inserida
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);

            col1.innerText = palavras[i]; // joga um conteudo em cada célular
            col2.innerText = dicas[i];
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
        }
    }
};

// ocorre quando o checkbox é alterado. Exibe a lista se marcado, senao, recarrega
ckMostrar.addEventListener("change", () => {
    ckMostrar.checked ? montarTabela() : window.location.reload();
});

tbPalavras.addEventListener("click", (e) => {
    // se a classe do elemento alvo clicado contém excluir
    if (e.target.classList.contains("excluir")) {
        // acessa o pai do pai do elemento alvo, o obtem o texto do 1° filho
        const palavra = e.target.parentElement.parentElement.children[0].innerText;

        if (confirm(`Confirma Exclusão da Palavra: "${palavra}" ?`)) {
            // remove a linha da tabela, correspondente ao simbolo de excluir clicado
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("jogoPalavra"); // excluir dados de localStorage
            localStorage.removeItem("jogoDica");

            const palavras = [];
            const dicas = [];

            // obtem os dados da tabela, acrescentando-os aos vetores
            for (let i = 1; i < tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText);
                dicas.push(tbPalavras.rows[i].cells[1].innerText);
            }

            // salva o conteúdo dos vetores em localStorage (sem a linha removida)
            localStorage.setItem("jogoPalavra", palavras.join(";"));
            localStorage.setItem("jogoDica", dicas.join(";"));
        }
    }
});