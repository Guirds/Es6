//Mutaçao, quando se trabalha com o valor da constante, porem mudadndo apenas os valores dentro do objeto
const usuario = { nome: "Guilherme" };

usuario.nome = "Diego";

console.log(usuario);

// variavel de scopo
function teste(x) {
  let y = 2; //variavel apenas do scopo teste, ou seja, n e possivel chamar essa variavel fora do scopo

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
