class Cliente {

  constructor(nome, cpf, senha) {
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  };
  
  get cpf() {
    return this._cpf;
  };

  autenticar(senha) {
    return senha == this._senha;
  };

}

export { Cliente };


// cpf só pode ser atribuído em tempo de construção.
// como ele só tem o getter, e não o setter, um valor
// nunca poderá ser atribuído a ele depois de construído.