//Manipulando arrays
const frutas = ["Maçã", "Laranja"];

frutas.unshift = "Começo";
frutas.push = "Fim"

console.log(frutas);

frutas.shift(); // deleta o primeiro
frutas.pop();   // deleta o ultimo

console.log(frutas);

// Arrow function trata o this. de maneira diferente, ele nao pega o this. verdadeiro da classe, mas sim o do objeto instanciado
// function media(x){
//     return x/2;
// }
const media = (x) => x/2;
// console.log(media(10));

const numeros = [1,2,3,4,5,6,7,8,9];

const numImpar = numeros.find((num) => num % 3 === 0); // FIND só retorna o primeiro elemento
console.log(numImpar);

console.log(numeros.filter((num) => num % 2 === 0)) // FILTER retorna todos de acordo com a condicao

// ******** CALLBACK ***********
function cumprimentar (nome, callback) {
   console.log(`Olá, ${nome} `+callback()) ;
    // console.log(`Olá, ${nome} `) ;
    // callback();
}

function segundaParte(){
    // console.log("Segunda parte!");
    return "Segunda parte!";
}

cumprimentar ("Honda", segundaParte);
cumprimentar ("Honda", (x) => x = "Terceira Parte!");

// ************ SET TIMEOUT **********
// 1000ms = 1s

function mostrarMensagem(){
    console.log("Olá caralho,")
}

setTimeout(mostrarMensagem, 1500);
//setTimeout(cumprimentar("Kaka", segundaParte), 2000);  Está errado assim, pois quando uma função com parâmetros é chamada, ela é automaticamente executada, já trazendo seu resultado, e o setTimeout(), o primeiro argumento esperado é uma função, ou seja, seu método, e não o resultado dela. Para que isso funcione, é necessário encapsular a funcao cumprimentar() utilizando uma arrow function ou função anônima.

setTimeout((x) => cumprimentar("KAKA", segundaParte), 2500);





