import { Cliente } from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";

const cliente1  = new Cliente('Ricardo', 111222333009);
const cliente2 = new Cliente('Alice', 888444777009);
const cliente3 = new Cliente('Gabriel', 12345678910);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500)
const conta2 = new ContaCorrente(cliente2, 102);
const conta3 = new ContaCorrente(cliente3, 3309);
contaCorrenteRicardo.transferir(150, conta2);

console.log(ContaCorrente.numeroDeContas, conta3)