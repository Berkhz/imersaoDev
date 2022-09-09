function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorDolarNumerico = parseFloat(valor) // parseFloat(): Analisa o argumento string e retorna um número decimal.
    
    var valorReal = valorDolarNumerico * 5
    console.log(valorReal)
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "Resultado em real é R$" + valorReal
    elementoValorConvertido.innerHTML = valorConvertido //innerHTML: Insere o elemento no HTML
  }