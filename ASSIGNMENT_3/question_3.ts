interface Printable{
  name:string;
  radius?:number;
  id?:number;
}

let circle: Printable={
  name:"CIRCLE",
  radius:10
}

let employee: Printable={
  name:"JAKE",
  id:101
}

let printAll=function(circle,employee){
  console.log(circle);
  console.log(employee);

}
printAll(circle,employee);
