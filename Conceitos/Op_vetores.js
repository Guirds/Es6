const arr = [1, 3, 4, 5, 8, 9]; //todas as funcoes percorem todo o array, porem retorna os valores de formas diferntes;

const newArr = arr.map(function(item) {
  //percorre todo o array
  return item * 2;
});

const sum = arr.reduce(function(total, next) {
  return total + next;
});

const filter = arr.filter(function(item) {
  //vai retornar um valor true ou false, nesse caso retorna os valores pares(true) e nao retorna os valores impares(false)
  return item % 2 === 0;
});

const find = arr.find(function(item) {
  return item === 4;
}); //verifica se tem a informaçao dentro do array ou se pode encontrar

console.log(newArr);
console.log(sum);
console.log(filter);
