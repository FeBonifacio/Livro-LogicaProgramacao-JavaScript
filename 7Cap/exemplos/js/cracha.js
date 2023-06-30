const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //obtem o nome informado e retira espaços em branco do inicio e final da string
    const nome = frm.inFuncionario.value.trim()

    if (!nome.includes(" ")) { //se o nome nao possuir espaço
        alert("Informe o nome completo...")
        return
    }

    const priEspaco = nome.indexOf(" ") //primeiro espeço
    const ultEspaco = nome.lastIndexOf(" ") //último espaço
    
    //copia o nome e sobrenome usando os parametros do substr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `Crachá: ${cracha}`
})