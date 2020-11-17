var a = 8;
var b = 12;
if (a === 8) {
    var a = 9;
    var b_1 = 10;
    console.log(a); //a=9
    console.log(b_1); //b=10
}
console.log(a); //a=9
console.log(b); //due to let, it is block scope value will be b=12
