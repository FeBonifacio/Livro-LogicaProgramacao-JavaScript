const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)
    if (saque % 10 != 0) { //Se saque não é multiplo de 10
        alert("Valor inválido para notas disponiveis (R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
    }

    const notasCem = Math.floor(saque / 100) //calcular as notas
    let resto = saque % 100 //quanto sobra para pagar
    const notasCinquenta = Math.floor(resto / 50) //calcular notas de 50
    resto = resto % 50 //quanto sobra
    const notaDez = Math.floor(resto / 10) //calcular 10

    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notaDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notaDez}`
    }
})

