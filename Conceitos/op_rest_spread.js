//REST
function soma(a, b, ...params) {
  return params;
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// SPREAD

const usuario1 = {
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
};

const usuario2 = { ...usuario1, nome: "Guilherme" };

console.log(usuario2);
