class Cliente{
    nome;
    cpf;

};

class contaCorrente{
    agencia;
    saldo;

    sacar(valorSacado){
        if(this.saldo >= valorSacado){
            this.saldo -= valorSacado;
        }
    }
}

const cliente1  = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = '111222333009';

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = '888444777009';

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 100;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(75)
console.log(contaCorrenteRicardo.saldo)
