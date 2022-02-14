//01 - a) Os construtor inicializam uma classe.
//b) Apenas uma vez.
//c) É necessário passar um método público e retorar o atributo de interesse

class UserAccount {
    private cpf:string;
    private name:string;
    private age:number;
    private balance:number = 0;
    private transactions:Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
}

const maria = new UserAccount("253.684.685-58", "Maria",22)

console.log(maria)

class Transaction {
    private description:string;
    private value:number;
    private date:string;

    constructor(description:string, value:number, date:string){
        this.date = date;
        this.value = value;
        this.description = description
    };

}

class Bank {
    private accounts: UserAccount[];

    constructor(accounts:UserAccount[]){
        this.accounts = accounts;
    }
}