var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.totalBalance = function () {
        return this.balance;
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var acc = new Account(110, "David", 12000);
var sav1 = new SavingAccount(101, "Jake", 10000, 2);
var sav2 = new SavingAccount(102, "Amy", 20000, 3);
var sav3 = new SavingAccount(103, "Charles", 30000, 4);
var sav4 = new SavingAccount(104, "Diaz", 40000, 5);
console.log(sav1);
console.log(sav2);
console.log(sav3);
console.log(sav4);
var cur1 = new CurrentAccount(101, "Chandler", 10000, 2000);
var cur2 = new CurrentAccount(102, "Monica", 20000, 3000);
var cur3 = new CurrentAccount(103, "Phoebe", 30000, 4000);
var cur4 = new CurrentAccount(104, "Ross", 40000, 5000);
console.log(cur1);
console.log(cur2);
console.log(cur3);
console.log(cur4);
console.log("Total balance in bank:" + acc.totalBalance());
