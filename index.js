import { Cliente } from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";

const cliente1  = new Cliente('Ricardo', 111222333009);
const cliente2 = new Cliente('Alice', 888444777009);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500)
const conta2 = new ContaCorrente(cliente2, 102);

contaCorrenteRicardo.transferir(150, conta2);

console.log(conta2)