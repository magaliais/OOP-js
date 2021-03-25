import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js'
import { Cliente } from './Cliente.js';

// CONTA CORRENTE
// sacar(valor)
// depositar(valor)
// transferir(valor, conta)

const cliente1 = new Cliente('Gabriel', 129837839829);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

contaSalario.sacar(50)


console.log('\n----------TESTES---------\n');

console.log(contaCorrente);
console.log(contaPoupanca);

console.log(ContaCorrente.numeroDeContas);
console.log(ContaPoupanca.numeroDeContas);
console.log(Conta.numeroDeContas);