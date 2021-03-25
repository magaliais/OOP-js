import { Conta } from "./Conta.js";

class ContaPoupanca extends Conta{

  static numeroDeContas = 0

  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia)  // super referencia a classe mãe. Ex.: super.sacar()
    ContaPoupanca.numeroDeContas += 1;
    Conta.numeroDeContas += 1;
  };

  sacar(valor) {
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }

}

export { ContaPoupanca }