const prompt = require("prompt-sync")()
const fruta = prompt("Informe o nome da fruta: ")
const num = Number(prompt("Informe o número: "))
let resposta = ""
for (let i = 1; i <= num; i++) {
    resposta = resposta + fruta + "*"
    console.log(resposta + fruta)
}