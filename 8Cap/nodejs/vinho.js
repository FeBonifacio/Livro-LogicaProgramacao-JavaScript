const prompt = require("prompt-sync")()

const vinhos = []

function titulo(texto) { //recebe, por parametro, o texto a ser exibido
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}

//Programa Principal
do {
    titulo("===< Cadastro de Vinhos >===")
    console.log("1. Inclusão dos Vinhos")
    console.log("2. Listagem dos Vinhos")
    console.log("3. Pesquisa por Tipo")
    console.log("4. Média e Dastaques")
    console.log("5. Finalizar")

    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {
        incluir()
    } else if (opcao == 2) {
        listar()
    } else if (opcao == 3) {
        pesquisar()
    } else if (opcao == 4) {
        calcularMedia()
    } else {
        break
    }
} while (true)

function incluir() {
    titulo("===< Inlcusão de Vinhos >===")

    const marca = prompt("Marca...")
    const tipo = prompt("Tipo...")
    const preco = Number(prompt("Preco R$..."))

    vinhos.push({marca, tipo, preco})
    console.log("Ok., Vinho cadastrado com sucesso!")
}

function listar() {
    titulo("===< Lista de Vinhos Cadastrados >===")
    console.log("Marca........ Tipo......... Preço R$:")

    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` +
        `${vinho.preco.toFixed(2).padStart(9)}`)
    }
}

function pesquisar() {
    titulo("===< Pesquisa por Tipo de Vinho >===")

    const pesq = prompt("Tipo: ")

    let contador = 0
    console.log("Marca................... Tipo.................. Preço R$:")

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` +
            `${vinho.preco.toFixed(2).padStart(9)}`)

            contador++ //se entrou no if, incrementa o catodor
        }
    }

    if (contador == 0) {
        console.log(`Obs.: Não há vinhos cadastrados do tipo "${tipo}"`)
    }
}

function calcularMedia() {
    titulo("===< Média e Destaques do Cadastro de Vinhos >===")

    const num = vinhos.length //obtem numero de elementos do vetor
    if (num == 0) {
        console.log(`Obs.: Não há vinhos cadastrados`)
        retunr
    }

    let total = 0
    for (const vinho of vinhos) {
        total += vinho.preco
    }

    const media = total / num // calcula o preço medio

    const vinhos2 = [...vinhos] // cria uma copia do vetor original
    vinhos2.sort((a, b) => a.preco - b.preco) // ordena por preco

    const menor = vinhos2[0] // menor preço é o primeiro (posicao 0)
    const maior = vinhos2[num - 1] // maior prelo é o ultimo (posicao - 1)

    console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)
}