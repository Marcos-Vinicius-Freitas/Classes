class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Heroi("Geraldao", 150, "mago");
  const guerreiro = new Heroi("Conan", 20, "guerreiro");
  const monge = new Heroi("Aang", 45, "monge");
  const ninja = new Heroi("Michelangelo", 30, "ninja");
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar(); 