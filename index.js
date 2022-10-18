import { Cliente } from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";

const cliente1  = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = '111222333009';

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = '888444777009';

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(200);
    
const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

contaCorrenteRicardo.transferir(150, conta2);

console.log(conta2)