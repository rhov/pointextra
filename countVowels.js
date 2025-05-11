/**
 * Seu Programa Retornando Número de Vogais
*
  🚀 Hands-on
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . 
O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  
O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo
 */gi

let texto = "Sheldon Lee é Cooper"
let countVogais = 0

countVogais = texto.match(/[aeiou]/g)
console.log(`Texto: ${texto} possui ${countVogais.length} vogais`)