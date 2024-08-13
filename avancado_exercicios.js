// 1) Exercicio de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens a lista usando push()
// Remova o primeiro item usando shift()
// Imprima a lista final no console

let lista = [];

lista.push(1,2,3,4,5);
lista.shift()

console.log(lista)

// 2) Encontre o primeiro numero no array q é divisivel por 7 e maior que 10

let ex2 = [3, 7, 14, 21, 29, 36, 42]

console.log(ex2.find((x) => x % 7 === 0 && x > 10))
console.log(ex2.filter((x) => x % 7 === 0 && x > 10))

// 4) Manipulacao de String - split() trim()
const frase = " Bom dia, mundo! "
// const palavras = frase.trim().split(" ")
const palavras = frase.trim().split(/[\s!,]+/)

console.log(palavras)

// 5)

const frase2 = "O rato roeu a roupa do rei de Roma"

const comecaCom = frase2.startsWith("O");
const terminaCom = frase2.endsWith("Roma");

console.log(comecaCom);
console.log(terminaCom);

