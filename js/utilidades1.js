function adicionarALista(punto) {
    var listaUl = document.getElementById("punto")
    var item = document.createElement("li")
    var numero = punto.length - 1
    var aleatorio = numeroAlAzar(0 , numero)
    var texto = document.createTextNode(punto[aleatorio])
    item.appendChild(texto)
    listaUl.appendChild(item)
}

function numeroAlAzar(min , max) {
    return Math.floor(Math.random()*(max - min + 1)) + min
}
    