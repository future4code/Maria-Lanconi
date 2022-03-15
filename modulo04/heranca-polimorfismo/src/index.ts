// Herança
// 1 a) Não é possível, esta privada e não possui método de retorno da senha;
// b) 1 vez.

// 2 a) 1 vez;
// b) 1 vez, porque esta dentro do constructor do user;

// class User {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string;
  
//     constructor(
//           id: string,
//           email: string,
//           name: string,
//           password: string
//       ){
//           console.log("Chamando o construtor da classe User")
//           this.id = id
//           this.email = email
//           this.name = name 
//           this.password = password
//       }
  
//       public getId(): string {
//         return this.id
//       }
  
//       public getEmail(): string {
//           return this.email
//       }
  
//       public getName(): string {
//           return this.name
//       } 

//       public introduceYourself():string{
//           return `Olá, sou ${this.name}. Bom dia!`
//       }
// }

// class Customer extends User {
//     public purchaseTotal: number = 0;
//     private creditCard: string;
  
//     constructor(
//       id: string,
//       email: string,
//       name: string,
//       password: string,
//       creditCard: string
//     ) {
//       super(id, email, name, password);
//       console.log("Chamando o construtor da classe Customer");
//       this.creditCard = creditCard;
//     }
  
//     public getCreditCard(): string {
//       return this.creditCard;
//     }
// }

// const cliente = new Customer('5864', 'maria@gmai.com', 'Maria Fernanda', 'maria1234', '125-351-857-87')

// //03 a)Não, porque é de acesso privado.
// console.log(cliente.introduceYourself())

// Poliformismo

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client:Client = {
    name: 'Maria',
    registrationNumber: 453,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2
    }
}

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
}

// const place = new Place()

//2 a) Não pode criar uma instancia de uma classe abstrata;
// b) Precisamos criar uma classe