const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // declara vetor global

//adiciona em tela
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inPaciente.value
    pacientes.push(nome) //adiciona o nome no final do vetor
    let lista = "" // string para concatenar pacientes
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${pacientes[i]}\n`
    }
    respLista.innerText = lista //exibe a lista de pacientes na página
    frm.inPaciente.value = "" // limpa conteúdo do campo de formúlario
    frm.inPaciente.focus() 
})

// butao urgencia
frm.btnUrgencia.addEventListener("click", () => {
    //verificar se as validações do form estao ok
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser antendido na urgência.")
        frm.inPaciente.focus()
        return //retorna ao form
    }

    const nome = frm.inPaciente.value // obtem o valor do paciente
    pacientes.unshift(nome)
    let lista = ""
    // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btnAtender.addEventListener("click", () => {
    // se o tamnho do veotr = 0
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        reutrn
    }

    const atender = pacientes.shift() //remove do inicio e pega o nome
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
})

