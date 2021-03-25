class Cliente {

  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
  
  get cpf() {
    return this._cpf;
  }

};

export { Cliente };


// cpf só pode ser atribuído em tempo de construção.
// como ele só tem o getter, e não o setter, um valor
// nunca poderá ser atribuído a ele depois de construído.