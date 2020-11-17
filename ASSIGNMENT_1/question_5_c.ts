let printCapitalNames=function(...names){
  for(let i in names){
    console.log(names[i].toUpperCase());
  }
}
let nameArray=["Chandler","Ross","Rachel","Phoebe","Joey"];
printCapitalNames(...nameArray);
