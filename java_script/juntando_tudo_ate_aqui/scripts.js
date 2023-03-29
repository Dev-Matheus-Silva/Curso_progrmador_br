//nome do aluno - nota 1 - nota 2 - média - aprovado/reprovado

let nomes = ["marcos","joão","felipe"];
let notasA = [5.6,7.8,9.5];
let notasB =[9.3,6,5.8,3.2];

function media(n1,n2){
  return(n1+n2)/2;
}

function passou(media){
  if(media > 7){
    return "aprovado"}
  

  else{
    return "reprovado"
  };
}

for (let index in nomes){
  let nota1 = (notasA[index]);
  let nota2 = (notasB[index]);

  let m = (nota1,nota2);

  console.log(nomes[index] +
    " - " + 
    nota1 + 
    " - " + 
    nota2 + 
    " - " + 
    passou(m))
}
































/*var nomes = ["matheus", "vitoria", "jose"];
var notasA =[5.6,8.9,5.5];
var notasB =[6.7,9.8,8.5];

function media(n1,n2){
  return (n1 + n2)/2;
}

function passou(media){
  if(media > 7){
    return "aprovado";
  }
  else{
    return "reprovado";
  }
}

for(var index in nomes){

  var nota1 = notasA[index];
  var nota2 = notasB[index];

  var m = (nota1,nota2);

  console.log(nomes[index] + 
    " - " + 
  nota1 +
  " - " + 
 nota2 + 
  " - " + 
  " - " + 
  passou(m));
}
*/