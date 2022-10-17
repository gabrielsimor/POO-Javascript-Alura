class Cliente{
    nome;
    cpf;

};

class contaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
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

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.sacar(75)
contaCorrenteRicardo.depositar(200)

console.log(contaCorrenteRicardo)