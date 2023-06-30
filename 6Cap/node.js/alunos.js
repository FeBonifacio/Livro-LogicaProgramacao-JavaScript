const prompt = require("prompt-sync")()
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair")
const alunos = [] //declarar vetor
do {
    const nome = prompt("Nome: ") //le o nome
    if (nome == "fim") {
        break //sair da repetição
    }
    const nota = Number(prompt("Nota: "))
    alunos.push({ nome, nota }) //adiciona dados ao veotr de objetos
    console.log("Ok! Aluno(a) cadastrado(a)...")
} while(true)
console.log("-".repeat(40)) //exibe 40 ------
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0) //obtém a maior nota
console.log(`Maior Nota: ${maior}`)

if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maior) //filtro
    for (const destaque of destaques) { //percorre os alunos em destaque
        console.log(`- ${destaque.nome}`)
    }
} else {
    console.log("Não há alunos em destaque na turma")
}