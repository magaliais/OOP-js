import { Cliente } from "./Cliente.js";

class Conta {     // Classe abstrata

  static numeroDeContas = 0;

  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta) {
      throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente");
    }
    this._saldo = saldoInicial;
    this._cliente = cliente instanceof Cliente ? cliente : undefined
    this._agencia = agencia;

    Conta.numeroDeContas += 1;
  };

  set cliente(novoValor) {
    if(novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  };

  get cliente() {
    return this._cliente;
  };

  get saldo() {
    return this._saldo;
  };

  // ----------------------------------------

  sacar(valor) {     // Método abstrato - Todas as classes filhas devem sobrescrevê-lo
    throw new Error("O método Sacar da conta é abstrato")
  };

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  };

  depositar(valor) {
    if(valor <= 100) {
      console.log('Valor inválido');
      return;
    }
    else
      this._saldo += valor;
  };

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  };
  
}

export { Conta }