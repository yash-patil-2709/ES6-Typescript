let userFriends=(username, ...userfrnds)=>{
  console.log(username);
  

  for(let i in userfrnds){
    console.log(userfrnds[i]);
  }
}


userFriends("jake",["Amy","Rosa","Charles"]);
