var nota1 = 4.0;
var nota2 = 6.8;

var media = (nota1 + nota2) / 2;

var conceito = "";

if (media >= 8) {
  conceito = "ótimo";
} else if (media > 6.5) {
  conceito = "bom";
} else {
  conceito = "regular";
}

conceito = "Mais ou menos";

console.log(media);
console.log(conceito);

switch (conceito) {
  case "ótimo":
    console.log("parabéns, vc e um ótimo aluno");
    break;

  case "bom":
    console.log("você estar quase perfeito");
    break;

  case "regular":
    console.groupCollapsed("estude mais um pouco!");
    break;

  default:
    console.log("Houve algum erro");
    break;
}
