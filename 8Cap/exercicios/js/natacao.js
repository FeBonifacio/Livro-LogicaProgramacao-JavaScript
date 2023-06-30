const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const atleta = frm.inAleta.value
    const idade = Number(frm.inIdade.value)
    
    const sublinhado = gerarTracos(atleta)
    const categoria = verCategoria(idade)
    
    resp.innerText = atleta + "\n" + sublinhado + "\nCategoria: " + categoria
})

const gerarTracos = nome => {
    let tracos = ""

    for (const letra in nome) {
        if (letra != "") {
            tracos += "-"
        } else {
            tracos +="/"
        }
    }

    return tracos
}

const verCategoria = idade =>{
    let cat
    if (idade <= 12) {
        cat = "Infantil"
    } else if (idade <= 18) {
        cat = "Juvenil"
    } else {
        cat = "Adulto"
    }
    return cat
}