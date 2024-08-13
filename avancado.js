//Manipulando arrays
const frutas = ["Maçã", "Laranja"];

frutas.unshift = "Começo";
frutas.push = "Fim"

console.log(frutas);

frutas.shift(); // deleta o primeiro
frutas.pop();   // deleta o ultimo

console.log(frutas);

// --------------------------- ARROW FUNCTION ---------------------------
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

// --------------------------- CALLBACK ---------------------------
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

// --------------------------- SET TIMEOUT ---------------------------
// 1000ms = 1s

function mostrarMensagem(){
    console.log("Olá caralho,")
}

//setTimeout(mostrarMensagem, 1500);

//setTimeout(cumprimentar("Kaka", segundaParte), 2000);  Está errado assim, pois quando uma função com parâmetros é chamada, ela é automaticamente executada, já trazendo seu resultado, e o setTimeout(), o primeiro argumento esperado é uma função, ou seja, seu método e não o resultado dela. Para que isso funcione, é necessário encapsular a funcao cumprimentar() utilizando uma arrow function ou função anônima.
//setTimeout((x) => cumprimentar("KAKA", segundaParte), 2500);

// --------------------------- TRY CATCH ---------------------------
// try{
//     const num1 = 6
//     if (num1 > 5) {
//         console.log("MAIOR que 5");
//         throw new Error("deu boa!")
//     }
// }catch(e){
//     alert("Erro:"+e.message);
//     console.log(e)
// }

console.log("-------------------")

// --------------------------- PROMISES ---------------------------
// promise só funciona se usar o 'then' para o 'resolve', 'catch' para o 'reject'
// só com métodos then catch
// const promessa = new Promise((resolve, reject) => {
//     const condicao = false;

//     if (condicao){
//         resolve ("A condicao é verdadeira! =) ");
//     } else {
//         reject ("A condicao é falsa! =( ")
//     }
// });

// promessa.then((mensagem) => {
//     console.log(mensagem);
// })
// .catch((erro) => {
//     console.log(erro)
// })

// --------------------------- ASYNC AWAIT ---------------------------
// await deve ser colocado sempre na function promise
//FAZENDO SEM RETORNAR A PROMISSE, USAMOS UM OBJETO PARA INSTANCIAR A PROMISE DENTRO DO MÉTODO ASYNC
async function vamoVer(condicao) {
    const promessa = new Promise((resolve, reject) => {
        if (condicao){
            resolve ("A condicao é verdadeira! =) ")
        } else {
            reject ("A condicao é falsa! =( ")
        }
    });
    try {
        const temp = await promessa;
        console.log(temp)
    } catch(erro) {
        console.log(erro)
    }
}
vamoVer(true);
vamoVer(false);

// OUTRA FORMA DE SE FAZER, RETORNANDO A PROMISSE que está em outro método
function verificarIdade(idade){
    return new Promise((resolve, reject) =>{
        if(idade > 18){
            resolve("Tu pode tirar CNH =)")
        } else {
            reject("Nada de CNH =(")
        }
    });
}

async function tirarCNH(idade) {
    try {
        const x = await verificarIdade(idade)
        console.log(x)
    } catch (erro){
        console.log(erro)
    }
}
tirarCNH(19)
tirarCNH(17)



