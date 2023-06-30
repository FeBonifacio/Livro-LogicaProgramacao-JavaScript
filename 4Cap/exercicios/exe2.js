const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)

if (condutor <= permitida) {
    resp.innerText = "Situação: Sem Multa"
    } else {
    const maisVinte = permitida * 1.2
    if (condutor <= maisVinte) {
        resp.innerText = "Situação: Multa Leve"
    } else {
        resp.innerText = "Situação: Multa Grave"
    }
    }
})