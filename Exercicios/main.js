import axios from "axios";

class Api {
  static async getUserFromGithub(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      console.log(response);
    } catch (err) {
      console.warn("Erro na API");
    }
  }
}

Api.getUserFromGithub("diego3g");
Api.getUserFromGithub("diego3g124123");

class Github {
  static async getRepositories(repo) {
    try {
      const responseGit = await axios.get(
        `https://api.github.com/repos/${repo}`
      );
      console.log(responseGit);
    } catch (err) {
      console.log("Repositório não existe");
    }
  }
}

Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv");

class busca {
  async buscaUsuario(usuario) {
    try {
      const buscador = axios.get(`https://api.github.com/users/${usuario}`);
      console.log(buscador);
    } catch (err) {
      console.log("Usuário não existe");
    }
  }
}
buscaUsuario("diego3g");

/*import axios from "axios";

class Api {
  static async getUserInfo(username) {
    const reponse = await axios.get(`https://api.github.com/users/${username}`);
  }
}

Api.getUserInfo("Guirds");*/

// Funão delay aciona o .then após 1s
/*async function delay(resolve) {
  umPorSegundo() = () => {
    setTimeout(resolve, 1000)
  }
  console.log(await umPorSegundo("1s"));
  console.log(await umPorSegundo("2s"));
  console.log(await umPorSegundo("3s"));

  console.log(response);
};
umPorSegundo();*/
