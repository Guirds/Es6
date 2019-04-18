class List {
  constructor() {
    this.data = [];
  }
  //Metodo de inserçao
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

//herança
class TodoList extends List {
  constructor() {
    super(); // pega o construtor da classe pai

    this.usuario = "Guilherme";
  }
  //metodo para mostrar usuario
  mostraUsuario() {
    console.log(this.usuario);
  }
}
//crindo uma variavel para apresentar os valores do array TodoList()
const MinhaLista = new TodoList();

//Pega o id da tag button que quando dispara um click aciona uma funçao que adiciona um "novo todo"
document.getElementById("novotodo").onclick = function() {
  MinhaLista.add("Novo Todo");
};

MinhaLista.mostraUsuario();
