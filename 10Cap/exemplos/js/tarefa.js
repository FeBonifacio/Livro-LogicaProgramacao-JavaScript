const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const tarefa = frm.inTarefa.value

    const h5 = document.createElement("h5") //cria o leemento HTML h5
    const texto = document.createTextNode(tarefa) // cria um texto
    h5.appendChild(texto) // define que texto será filho do h5
    dvQuadro.appendChild(h5) // e que h5 será filho do divQuadro

    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") 

    if (tarefas.length == 0) {
        alert("Não há tarefas para selecionar")
        return
    }

    let aux = -1 // variavel auxiliar para indicar linha selecionada

    for (let i = 0; i < tarefas.length; i++) {
        //se a tag é da class tarefa-selecioanda (está selecionada)
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal" // troca para normal
            aux = i // muda valor da variavel
            break
        }
    }

    // se a linha que for a ultima, volta pra primeira
    if (aux == tarefas.length - 1) {
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada" // muda estilo da proxíma linha
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    let aux = -1

    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") {
            aux = i
        }
    })

    if (aux == -1) {
        alert("Selecione uma tarefa para removê-la...")
        return
    }

    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux])
    }
})

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0) {
        alert("Não há tarefas para serem salvas")
        return
    }

    let dados = ""
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";" //acumular conteúdo de cafa h5
    })

    //gravar os dados em localStorage, removendo o último ";"
    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    if (localStorage.getItem("tarefasDia")) {
        alert("Ok!, Tarefas Salvas.")
    }
})

//salvar para o lado da page
window.addEventListener("load", () => {
    if (localStorage.getItem("tarefasDia")) {
        const dados = localStorage.getItem("tarefasDia").split(";")

        dados.forEach(dado => {
            const h5 = document.createElement("h5")
            const texto = document.createTextNode(dado)
            h5.appendChild(texto)
            dvQuadro.appendChild(h5)
        })
    }
})