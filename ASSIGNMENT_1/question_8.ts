class Account{
  constructor(id,name,balance){
    this.id=id;
    this.name=name;
    this.balance=balance;
  }
  totalBalance(){
    return this.balance;
  }
}

class SavingAccount extends Account{
  constructor(id,name,balance,interest){
    super(id,name,balance);
    this.interest=interest;
  }
}

class CurrentAccount extends Account{
  constructor(id,name,balance,cash_credit){
    super(id,name,balance);
    this.cash_credit=cash_credit;
  }
}
let acc=new Account(110,"David",12000);
let sav1=new SavingAccount(101,"Jake",10000,2);
let sav2=new SavingAccount(102,"Amy",20000,3);
let sav3=new SavingAccount(103,"Charles",30000,4);
let sav4=new SavingAccount(104,"Diaz",40000,5);

console.log(sav1);
console.log(sav2);
console.log(sav3);
console.log(sav4);


let cur1=new CurrentAccount(101,"Chandler",10000,2000);
let cur2=new CurrentAccount(102,"Monica",20000,3000);
let cur3=new CurrentAccount(103,"Phoebe",30000,4000);
let cur4=new CurrentAccount(104,"Ross",40000,5000);

console.log(cur1);
console.log(cur2);
console.log(cur3);
console.log(cur4);

console.log("Total balance in bank:" +acc.totalBalance());
