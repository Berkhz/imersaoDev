var numeroSecreto = parseInt(Math.random() * 11);
 
function Chutar() {
  var resultado = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
     resultado.innerHTML = ("Digite um número entre 0 a 10!");
  } else {
     resultado.innerHTML = "Você errou!";
  }
}