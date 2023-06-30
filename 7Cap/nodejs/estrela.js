const prompt = require("prompt-sync")()
const altura = Number(prompt("Altura da Árvore: "))
console.log()
for (let i = 1; i <= altura; i++){
    const espacos = 30 + (altura - i)
    console.log(" ".repeat(espacos) + "*".repeat(i*2)) //exibe em cada linha
}