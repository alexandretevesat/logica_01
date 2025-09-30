// alert("Bem Vindo!");

// var nome;
// nome = "Alex";
// console.log(nome);

// var frase;
// frase = "meu nome é Alexandre 1979";
// console.log(frase);
// console.log(typeof frase);

// var idade;
// idade = 29.11;
// console.log(idade);

// var ativo;
// ativo = false;
// console.log(ativo);

// var contem;
// contem = null;
// console.log(contem);

// var definido;

// console.log(4 + 4);
// console.log(4 - 4);
// console.log(4 * 4);
// console.log(4 / 4);
// console.log(4 % 4);
// console.log(4 ** 4);

// console.log(10 > 5); // maior que
// console.log(10 < 5); // menor que
// console.log(10 == 10); // igual (, quando um number se iguala a string)
// console.log(10 === 10); //estrita igualdade

// var numero = 10; // atribuição
// numero += 3; // atribuição com adição de valor +1
// numero -= 1; // atribuição com subtração
// numero *= 10;
// numero /= 2;
// console.log(numero);

// OBS use ctrl; para comentar area selecionada

// operadores lógicos

//    & = and                        || = or                           ! = not

console.log(!false);

// ESTRUTURAS DE CONTROLE DE FLUXO (CONDICIONAIS E DE REPETIÇÃO)

// ESTRUTURAS CONDICIONAIS
// IF (se alguma coisa)

var idade = 46;
if (idade >= 18) {
  console.log("Você é maior de idade");
} // essas chaves são blocos de códigos OBS: o numero zero ele não executa, pois zero não é nada, é ausência. Qualdo algo for null também é considerado falso bem como o undefined. ALém deles quando há uma string vazia.

// var idade = 17;
// if (idade >= 18) {
//   console.log("maior");
// } else console.log("menor");

// var cpf;
// console.log ("cpf") {
//     console.log("pode segui")
// } else {
//     console.log("CPF obrigatorio");
// }

// var idade = prompt("Digite sua idade");
// console.log(idade); // dessa forma, o numero informado será uma string

// var idade = Number(prompt("Digite sua idade"));
// console.log(idade);

// if (idade >= 18) {
//   alert("pode entrar");
// } else {
//   alert("não pode entrar");
// }

// var numero_1 = Number(prompt("informe um numero"));
// var numero_2 = Number(prompt("informe outro numero"));

// if (numero_1 > numero_2) {
//   alert(numero_1);
// } else {
//   alert(numero_2);
// }

// if (numero_1 > numero_2) {
//   alert(numero_1);
// } else if (numero_1 < numero_2) {
//   alert(numero_2);
// } else {
//   alert("Numero são Iguais");
// }

// var num = Number(prompt("Informe um numero"));

// if (num > 0) {
//   alert(+num + " é um numero positivo");
// } else if (num < 0) {
//   alert(+num + " é um número negativo");
// } else {
//   alert(+num + " é um número neutro");
// }

var opcao = prompt("Informe uma letra");

if (opcao == "M") {
  alert("Masculino");
} else if (opcao == "m") {
  alert("masculino");
} else if (opcao == "F") {
  alert("Feminino");
} else if (opcao == "f") {
  alert("feminino");
} else {
  alert("Você errou!!!");
}
