let chatroom1= new Map([
  ['Jake','Diehard'],
 ['Amy','HarryPotter'],
 ['Charles','PulpFiction']
]);

 let chatroom2= new Map([
    ['Holt','Discrimination'],
    ['Rosa','Avengers'],
    ['Kevin','Seven']
 ]);

  console.log("Chatroom1:");
  chatroom1.forEach( (value, key, mapFunc) => {
    console.log(`${key}: ${value}`);
    });


  console.log("Chatroom2");
  chatroom2.forEach( (value, key, mapFunc) => {
  console.log(`${key}: ${value}`);
    });

console.log("Size of chatroom1: "+chatroom1.size);
console.log("Size of chatroom2: "+chatroom1.size);
