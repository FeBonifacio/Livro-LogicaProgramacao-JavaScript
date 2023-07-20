const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    // obtem conteúdo dos campos (.trim() remove espaços na palavra no inicio e fim)
    const palavra = frm.inPalavra.value.trim();
    const dica = frm.inDica.value;

    // valida preenchimento (palavra nao deve possuir espaço em branco no meio)
    if (palavra.includes(" ")) {
        alert("Informe uma palavra válida (sem espaços)");
        frm.inPalavra.focus();
        return;
    }

    // se já existe dados em localStorage, grava conteúdo anterior+";"+palavra / dica
    if (localStorage.getItem("jogoPalavra")) {
        localStorage.setItem("jogoPalavra",
            localStorage.getItem("jogoPalavra") + ";" + palavra);
        localStorage.setItem("JogoDica", localStorage.getItem("JogoDica") + ";" + dica);
    } else {
        // senão, é a primeira inclusao: grava apenas a palavra / dica
        localStorage.setItem("jogoPalavra", palavra);
        localStorage.setItem("jogoDica", dica);
    }

    // se salvou
    if (localStorage.getItem("jogoPalavra")) {
        alert(`Ok! Palavra ${palavra} Cadastrada com Sucesso`);
    }

    frm.reset();
    frm.inPalavra.focus();
});