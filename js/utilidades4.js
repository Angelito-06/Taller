function agregarEmpleadoATabla(){
    var primeraColumna = document.getElementById("id")
    var segundaColumna = document.getElementById("nombre")
    if (primeraColumna.value == "" && segundaColumna.value == "") {
        alert("Tiene que llenar los dos apartados")
    } else {
        var table = document.getElementById("table")
        var fila = table.insertRow(-1)
        var columnaCodigo = fila.insertCell(0)
        var columnaNombre = fila.insertCell(1)

        columnaCodigo.innerHTML = document.getElementById("id").value
        columnaNombre.innerHTML = document.getElementById("nombre").value
        document.getElementById("id").value = ""
        document.getElementById("nombre").value = ""
    }
}