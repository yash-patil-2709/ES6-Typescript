let names=['Jake','Amy','Charles'];
let obj=(array)=>{
  let arr1={};
  for(var i=0;i<array.length;i++){
    arr1[i]=`name: ${array[i]}, length: ${array[i].length}`;
  }
  return arr1;
}

console.log(obj(names));
