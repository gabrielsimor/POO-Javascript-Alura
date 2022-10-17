import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1  = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = '111222333009';

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = '888444777009';

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200)
const valorSacado = contaCorrenteRicardo.sacar(20)
console.log(contaCorrenteRicardo)
console.log(valorSacado)