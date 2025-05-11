/**
 * Seu Programa sobre função
*
  🚀 Hands-on
Crie uma função que pega uma lista de inteiros e strings e 
retorna uma nova lista sem as strings.  
O campo abaixo é um campo de texto, logo, 
copie o código javascript e cole abaixo


Obter lista
Obter item lista
Identificar strings
Remover strings
Imprimir lista
 */

let lista = ["Sh3ld0n","P3nn1","XPTO","1234"]
let listaNumeros =[]

function somenteNumeros(lista){
    lista.forEach(elemento => {
        const numeros = elemento.match(/\d+/g);
        if (numeros === null) return;
        const resultado = numeros.join('');
        listaNumeros.push(resultado);
    });
}

somenteNumeros(lista)
console.log(`Lista original: ${lista}`);
console.log(`Lista sem strings: ${listaNumeros}`);
// Exibir lista