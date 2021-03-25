import { Cliente } from './Cliente.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';

import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';

import { SistemaAutenticacao } from './SistemaAutenticacao.js';

// CONTA CORRENTE
// sacar(valor)
// depositar(valor)
// transferir(valor, conta)

// SISTEMA AUTENTICACAO
// login(autenticavel, senha)

const cliente = new Cliente('Gabriel', 129837839829, '456');

const gerente = new Gerente('Gabriel', 5000, 12345678901);
const diretor = new Diretor('Rodrigo', 10000, 12345678900);
gerente.cadastrarSenha('123456');
diretor.cadastrarSenha('123');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123456');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');



console.log('\n----------TESTES---------\n');


console.log('Autenticacao gerente: ' + gerenteEstaLogado);
console.log('Autenticacao diretor: ' + diretorEstaLogado);
console.log('Autenticacao cliente: ' + clienteEstaLogado);