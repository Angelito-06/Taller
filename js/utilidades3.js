function convertirAGrados(){
    var centigrados = parseFloat(document.getElementById("centigrados").value)
    var fahrenheit = centigrados * 9/5 + 32
    document.getElementById("fahrenheit").value = fahrenheit
}