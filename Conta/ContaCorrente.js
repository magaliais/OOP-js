import { Conta } from "./Conta.js";

class ContaCorrente extends Conta{
  
  // variável estática
  static numeroDeContas = 0;
  
  constructor(cliente, agencia) {

    super(0, cliente, agencia);  // super referencia a classe mãe. Ex.: super.sacar()

    ContaCorrente.numeroDeContas += 1;
    Conta.numeroDeContas += 1;
  };

  // sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(taxa, valor);  // ou super._sacar(taxa valor)
  };

};

export { ContaCorrente };