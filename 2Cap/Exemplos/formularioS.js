const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // obtém o nome
    resp.innerText = `Olá ${nome}`
    e.preventDefault() // Evita envio do form
})