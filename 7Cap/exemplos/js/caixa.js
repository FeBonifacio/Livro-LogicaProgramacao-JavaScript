const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2 / 100 //multa por atraso
const TAXA_JUROS = 0.33 / 100 // juros por dia de atraso

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date() // cria variaveis instancia objetos
    const vencto = new Date() // do tipo Date()

    const partes = dataVenc.split("-") //data vem no formato aaaa-mm-dd
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto // calcula a direrença de dias entre datas (em ms)
    let multa = 0
    let juros = 0

    if (atraso > 0) {
        //converter ms do atraso em dias (1 dia = 24h X 60min x 60seg X 1000ms: 86400000)
        const dias = atraso / 864000000
        multa = valor * TAXA_JUROS // calcular multa e juros
        juros = valor * TAXA_JUROS * dias
    }

    const total = valor + multa + juros // calcular total

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})