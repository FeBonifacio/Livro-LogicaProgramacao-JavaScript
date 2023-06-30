const frm = document.querySelector("form")
const resp1 = document.querySelector("span")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const servico = frm.inServico.value

    if(localStorage.getItem("herbieServico")) {
        localStorage.setItem("herbieServico", localStorage.getItem("herbieServico") + ";" + servico)
    } else {
        localStorage.setItem("herbieServico", servico)
    }

    mostrarPendentes()

    frm.reset()
    frm.inServico.focus()
})

const mostrarPendentes = () => {
    let numPendentes

    if (localStorage.getItem("herbieServico")) {
        numPendentes = localStorage.getItem("herbieServico").split(";").length
    } else {
        numPendentes = 0
    }
    resp1.innerText = numPendentes
}

window.addEventListener("load", mostrarPendentes)

frm.btExecutar.addEventListener("click", () => {

    if(!localStorage.getItem("herbieServico")) {
        alert("Não há serviçoes pendentes para executar")
        return
    }

    const servicos = localStorage.getItem("herbieServico").split(";")

    const emExecucao = servicos.shift() //remove o primeiro

    resp2.innerText = emExecucao //mostra removido

    localStorage.setItem("herbieServico", servicos.join(";")) //salva a nova lista

    mostrarPendentes()
})