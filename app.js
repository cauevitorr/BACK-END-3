const inModelo = document.getElementById("inModelo")
const inPreco = document.getElementById("inPreco")
const btnAdicionar = document.getElementById("btnAdicionar")
const btnListar = document.getElementById("brnListar")
const btnFiltrar = document.getElementById("btnFiltrar")
const outLista = document.getElementById("outLista")

const carros = []

const adicionarCarro = () => {
    const modelo = inModelo.value
    const preco = Number(inPreco.value)

    if(modelo === '' || preco === 0 || isNaN(preco)){
        alert("Digite os valores corretos")
        return
    }
    carros.push({model: modelo, preco: preco})
    console.log(carros)
}

btnAdicionar.addEventListener("click", adicionarCarro)
