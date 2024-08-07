/* -----------  TIPOS, COMANDOS, ETC ---------------- 
console.log()
typeof "variavel"=> retorna o tipo do dado
{} -> objeto
[] -> array
null -> nulo (normalmente usado para iniciar variáveis que terão seu valor alterado)
let -> variavel
const -> constante

--------- OPERADORES ---------
== -> comparação igual
!= -> comparação diferente
=== -> leva em comparação o tipo do dado  ***SEMPRE UTILIZEI ESSE, MAIS CONFIABILIDADE***

&& -> and
|| -> or



*/
const x = "12";
const xConvertido = Number(x);

console.log("Numero em formato String: " + x);
console.log("Numero em formato Number: " + xConvertido);

// Switch case
let fruta = "banana";
switch (fruta) {
    case "melancia":
        console.log("Melancia é a fruta!");
        break;
    case "banana":
        console.log("Banana é a fruta!");
        break;
}

// Uma variável vazia é considerada falsa
let varVazia = "";

if (varVazia) {
    console.log("True - if");
} else {
    console.log("False - else");
}

// Array, listas
const arrayNum = [1,2,3,4,5];

arrayNum.push(6);   // push -> adiciona um novo dado no array
arrayNum.push("sete");
console.log(arrayNum);
arrayNum.pop();       // pop ->exclui o ultimo dado do array
console.log(arrayNum);

// Interpolação  -> é como uma concatenação, mas fica mais organizada sem o +
const string1 = "Ola, ";
const string2 = `${string1}tudo bem com vc?`  // interpolado

const string3 = "Ola, ";
const string4 = string1 + "tudo bem com vc?"; // concatenado

console.log(string2);
console.log(string4);

console.log(`Length: ${string1.length}`);
console.log(string1[0]);
console.log(string4.toUpperCase());

// Data e Hora
const now = Date();
console.log(now);

const natal = new Date(2024, 11, 25); // detalhe que os meses começam a contar do 0(zero), no caso dezembro é entendido como 11
console.log(natal);

