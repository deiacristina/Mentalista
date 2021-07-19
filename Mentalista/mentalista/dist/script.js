var numeroSecreto = parseInt(Math.random() * 101);
var tentativas = 0;
console.log("numero secreto " + numeroSecreto);

function discover() {
  var palpite = parseInt(document.getElementById("inputguess").value);
  console.log(palpite);
  console.log("numero secreto " + numeroSecreto);

  if (numeroSecreto != palpite) {
    // var palpite = parseInt(prompt("Digite um número"));
    if (palpite > numeroSecreto) {
      tentativas += 1;
      document.getElementById("dica").innerHTML = "O número secreto é menor.";
      document.getElementById("numTentativas").innerHTML =
        "Você usou " + tentativas + " tentativa(s)";
    } else if (palpite < numeroSecreto) {
      //alert("O número secreto é maior");
      tentativas += 1;
      document.getElementById("dica").innerHTML = "O número secreto é maior.";
      document.getElementById("numTentativas").innerHTML =
        "Você usou " + tentativas + " tentativa(s)";
    }
  } else {
    document.getElementById("dica").innerHTML = "Parabéns, você acertou o número secreto";
    document.getElementById("numTentativas").innerHTML =
      "Você acertou com " + tentativas + " tentativa(s)";
  }
  document.getElementById("inputguess").value = "";
}
function dica() {
  document.getElementById("dicaalgoritmo").innerHTML =
    "A pesquisa ou busca binária (em inglês binary search algorithm ou binary chop) é um algoritmo de busca em vetores que segue o paradigma de divisão e conquista. A complexidade desse algoritmo é da ordem de Θ(log₂ N) em que N é o tamanho do vetor de busca. Logo Θ(log₂ 100) = 6.64, então em até 6.64 vezes você tem a chance de acertar usando a busca binária";
}