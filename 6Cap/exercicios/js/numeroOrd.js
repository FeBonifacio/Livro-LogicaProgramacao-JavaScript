const frm = document.querySelector("form")
const resp1 = document.querySelector("#outLista")
const resp2 = document.querySelector("#outOrdem")
const numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    numeros.push(numero)

    resp1.innerText= "Números: " + numeros.join(",")
    resp2.innerText = ""

    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btVerificar.addEventListener("click", () => {
    if (numeros.length == 0) {
    alert("Não há numeros !")
    frm.inNumero.focus()
    return
    }

    let ordem = true //flag indicativa

    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i+1]) {
            ordem = false
            break
        }
    }

    resp2.innerText = ordem? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente."
})