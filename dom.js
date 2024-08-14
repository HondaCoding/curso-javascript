// --------------------------- DOM - Document Object Model ---------------------------

// 1º coisa, saber Selecionar elementos
// const elementoPorId = document.getElementById("meuId");
// console.log(elementoPorId);

const elementoPorId2 = document.querySelector("#meuId");
console.log(elementoPorId2);

// const elementoPorClasse = document.getElementsByClassName("minhaClasse");
// console.log(elementoPorClasse);

// const elementoPorClasse2 = document.querySelector(".minhaClasse");
// console.log(elementoPorClasse2);

// ** O 'querySelector' é utilizado por padronizar a forma como os dados sao retornados para javascript!



// --------------------------- Manipular COUNTEÚDO de texto ---------------------------

const elemento = document.querySelector("#meuId");
console.log(elemento.textContent)

setTimeout(() => {
    elemento.textContent = "Novo texto!";
}, 1500)



// --------------------------- Manipular ATRIBUTOS da tag ---------------------------

const link1 = document.querySelector("a");  //querySelector sempre pega o 1º elemento, mesmo se houver mais.
console.log(link1);

link1.setAttribute("href", "https://horadecodar.com.br/cursos");
console.log(link1.getAttribute("href"));

link1.removeAttribute("target")             //remover atributo

console.log(link1.hasAttribute("target"));  //verificar se o atributo EXISTE



// --------------------------- Manipular classes do CSS ---------------------------

setTimeout(() => {
    elemento.classList.add("novaClasse");
    elemento.classList.remove("minhaClasse")
}, 1500);

//o método 'toggle()' adiciona a classe do argumento caso ela nao exista, e se existe ele apaga ela
elemento.classList.toggle("outraClasse");
setTimeout(() => {
    elemento.classList.toggle("outraClasse")
}, 2000);



// --------------------------- Manipular o CSS ---------------------------
const elemento3 = document.querySelector("#meuId");


elemento3.style.color = "green";
elemento3.style.backgroundColor = "black"; //background-color => backgroundColor



// --------------------------- Navegação entre NÓS ---------------------------

const elemento4 = document.querySelector("#meuInput");

const pai = elemento4.parentNode;       // obtém o elemento PAI
console.log(pai);

const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);
// não é um método confiável, pois pode sofrer alterações da IDE (como quebra de linha)



// --------------------------- Manipular estrutura do DOM ---------------------------

const novoElemento = document.createElement("div");
console.log(novoElemento);

novoElemento.textContent = "Minha div de JavaScript! antes do formulario pai";

document.body.appendChild(novoElemento);     // adiciona ao body o novoElemento, até entao só existia na parte "virtual"

document.body.insertBefore(novoElemento, pai);

setTimeout(() => {
    document.body.removeChild(elemento)
}, 3000);



// --------------------------- EVENTOS ---------------------------

//click
const botao = document.querySelector("#botaoCriar")
console.log(botao);
botao.addEventListener("click", () => {
    console.log("Deu certo o evento!")
});

//mouse
const elemento5 = document.querySelector("#meuFormulario");
console.log(elemento5);

elemento5.addEventListener("mouseover", () => {
    console.log("***O mouse passou por cima***")
})

// evento de vários botoes utilizando somente uma variável. Aqui é necessário um 'foreach' por o querySelectorAll cria uma NodeList, e a NodeList é uma coleção de elementos que nao possui o método 'addEventListener', portanto, o 'foreach' percorre toda essa lista, implementando o método 'addEventListener' em cada elemento da NodeList.
const botoes = document.querySelectorAll(".teste");
botoes.forEach( (btn) => {
    btn.addEventListener("mouseover", () => {
        console.log("Deu boa!")
        btn.style.color = "blue"
    })
})



// --------------------------- teclado ---------------------------

const tecla = document.querySelector("#meuInput");
tecla.addEventListener("keydown", () => {
    console.log("Teclado pressionada.")
})


// --------------------------- formulario ---------------------------

const form = document.querySelector("#meuFormulario")
form.addEventListener("submit", (event)=> {
    event.preventDefault(); // *                

    console.log("--------- FORM ENVIADO ----------")
})
// *previne que a pagina atualize quando Enviar o formulario, isso     permite validações durante o envio do formulario



// --------------------------- propagação de Eventos ---------------------------
// Eventos no elemento pai se propagam para o elemento filho

document.querySelector("#elementoPai").addEventListener("click", () => {
    console.log("Clique capturado do pai")
});

// é necessário colocar o event.stopPropagation() nos elementos filhos para que nao tenham o mesmo comportamento do pai
document.querySelector("#elementoFilho").addEventListener("click", (event) => {
    //event.stopPropagation();
    // console.log("Elemento filho!")
})

// --------------------------- Delegação de Eventos ---------------------------

document.querySelector("#elementoPai").addEventListener("click", function (event) {
    if(event.target.matches(".classeDosFilhos")){
        console.log("Evento delegado ao [FILHO]")
    }
})

