const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$: ")) // lê valor do carnet..
const num = Number(prompt("N° de Parcelas: ")) // e número de parcelas
const valorParcelas = Math.floor(valor / num) // calcula valor sem decimais
const valorFinal = valorParcelas + (valor % num) // calcula parcela final
for (let i = 1; i < num; i++) {
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ª parcela: R$ ${valorFinal.toFixed(2)}`)