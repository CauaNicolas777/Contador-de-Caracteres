const numeroCaracteres = document.getElementById('textarea')
const contadorElement = document.getElementById('contador')

numeroCaracteres.addEventListener("input", function(){
    const texto = numeroCaracteres.value
    const contador = texto.length
    contadorElement.innerHTML = "Número de Caracteres: " + contador
    
})
