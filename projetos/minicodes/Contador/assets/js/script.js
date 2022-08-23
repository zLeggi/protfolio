var alterarNumeroNatural = document.getElementById('numeroAtual')
var numeroAtual = 0;

function incremento() {

  numeroAtual = numeroAtual + 1;
  alterarNumeroNatural.innerHTML = numeroAtual;

}

function decremento() {
  numeroAtual = numeroAtual - 1;
  alterarNumeroNatural.innerHTML = numeroAtual;
}