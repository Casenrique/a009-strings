//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)
const novaFrase1 = frase.replace("verde", "rosa").replace("azul", "laranja");
console.log(novaFrase1)
console.log(`A nova frase inclui ao mesmo tempo as cores verde e laranja?: 
${novaFrase1.includes("verde") && novaFrase1.includes("laranja")}
${novaFrase1.toUpperCase("mas não deixe o gato sair")}

`)
