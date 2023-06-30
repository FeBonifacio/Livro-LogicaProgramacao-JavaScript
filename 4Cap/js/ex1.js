//Cria referencia ao form e elementos de respsota do programa
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Cria ouvinte para o submit
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value) //recebe o valor
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2 //calculo
    
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`
    //criar condição
    if (media >= 7) {
        // Altera texto e cor
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue"
    } else if (media >=4) {
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = "green"
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }
})