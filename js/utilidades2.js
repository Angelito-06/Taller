function covercionPesos(){
    var dolar = document.getElementById("dolar").value;
    var dolares = parseFloat(dolar)
    var tasaRepresentativa = 4418.12
    var pesoColombiano = dolares * tasaRepresentativa
    document.getElementById("cop").value = pesoColombiano
}