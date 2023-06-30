const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value)
    let numDivisores = 0 // declara a inicialização contador
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) { // verifica se 1, 2, 3 é divisor do num
            numDivisores++ // se é, incrementa contador
        }
    }
    if (numDivisores == 2) { // se possui apenas 2 divisores é primo
        resp.innerText= `${num} é Primo`
    } else {
        resp.innerText = `${num} Não é Primo`
    }
})