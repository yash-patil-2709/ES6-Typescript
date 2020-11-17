function armStrongNumber(){
  return{
    next:function getArmStrong(){
      let num;
      let r;
      let sum;
      let temp;

      for(num=1;num<=1000;num++){
        digits=num.toString().length;
               temp=num;
               sum = 0;

               while(temp!=0){
                   r=temp % 10;
                   temp=parseInt(temp/10);
                   sum+=r**digits;
               }
               if(sum==num)
                   console.log(num);

          }

    }
  }
}
let number=armStrongNumber();
console.log(number.next());
