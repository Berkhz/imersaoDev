function adicionarFilme() {
    var filmeFav = document.getElementById("filme").value;
    if (filmeFav.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFav);
    } else {
      console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
    console.log(filme);
    var elementoFilmeFav = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFav;
  }