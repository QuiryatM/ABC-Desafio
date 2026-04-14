let contador = 0;

function voltear(card) {

  let yaVista = card.classList.contains("vista");
  
  if (yaVista === false) {
    
    contador = contador + 1;

    let elementoContador = document.getElementById("contador");
    elementoContador.textContent = contador;

    card.classList.add("vista");
  }

  if (card.classList.contains("volteada")) {
    card.classList.remove("volteada");
  } else {
    card.classList.add("volteada");
  }
}


function filtrar(tipo) {
  
  let todasLasCards = document.querySelectorAll(".card");


  todasLasCards.forEach(function(card) {
    if (tipo === "todas") {
      card.style.display = "block";
    } else if (tipo === "vocal") {
      if (card.dataset.tipo === "vocal") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}