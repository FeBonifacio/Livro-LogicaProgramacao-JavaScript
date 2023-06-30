const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")
const resp = document.querySelectorAll("h5")[1]

const contarVisitas = () => {
        let contador = 0

        if (localStorage.getItem("lojaContador"))  {
            contador = Number(localStorage.getItem("lojaContador"))
        }

        contador++

        if (contador == 1) {
            resp.innerText = "Muito Bem-vindo! Esta é a usa primeira visita ao nosso site."
        } else {
            resp.innerText = `Que bom que você voltou! Esta é a sua visita de número ${contador} ao nosso site.`
        }

        localStorage.setItem("lojaContador", contador)
}

const trocarClube = () => {
    let clube
    if (frm.rbBrasil.checked) {
        clube = "Brasil"
    } else if (frm.rbCorinthians.checked) {
        clube = "Corinthians"
    } else {
        clube = "Real"
    }

    //define as classes de dvTitulo row e cores dod clube
    dvTitulo.className = `row cores-${clube}`

    //modifica a imagem de acordo com a seleção do lciente
    imClube.src = `../img/${clube.toLowerCase()}.png`
    imClube.className = "img-fluid"
    imClube.alt = `Símbolo do ${clube}`

    localStorage.setItem("clube", clube) //salva no navegador a escolha do cliente
}

frm.rbBrasil.addEventListener("change", trocarClube)
frm.rbCorinthians.addEventListener("change", trocarClube)
frm.rbReal.addEventListener("change", trocarClube)

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")

        if (clube == "Brasil") {
            frm.rbBrasil.checked = true
        } else if (clube == "Corinthians") {
            frm.rbCorinthians.checked = true
        } else {
            frm.rbReal.checked = true
        }
        trocarClube()
    }

    contarVisitas()
}

//ao carregar a pag, verifica se cliente ja selecionou o clube anterior
window.addEventListener("load", verificarClube)



