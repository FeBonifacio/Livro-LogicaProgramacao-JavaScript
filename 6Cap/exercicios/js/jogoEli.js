const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inClube.value
    clubes.push(nome)

    frm.btListar.dispatchEvent(new Event("click")) //dispara click em btLitar

    frm.inClube.value = ""
    frm.inClube.focus()
})

frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista")
        inClube.focus()
        return
    }

    let lista = "" //para concatenar clubes

    for (const clube of clubes) {
        lista += clube + "\n"
    }

    resp.innerText = lista
})

frm.btMontar.addEventListener("click", () => {
    const tam = clubes.length

    if (tam == 0 || (tam % 2 == 1)) {
        alert("Deve haver números par de clubes")
        inClube.focus()
        return
    }

    // concatenar jogos
    let jogos = ""
    const ultimo = tam - 1

    // percorrer os elementos do vetor
    for (i=0; i < tam / 2; i++) {
        jogos += clubes[i] + " X " + clubes[ultimo - i] + "\n"
    }

    resp.innerText = jogos
})