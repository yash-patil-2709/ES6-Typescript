class fibonacci{
  private _previousNo;
  private _currentNo;

  constructor(_previousNo,_currentNo){
    this._previousNo=_previousNo;
    this._currentNo=_currentNo;
  }

  next(){
    let sum=Symbol();
    console.log(typeof sum);

     sum=this._previousNo+this._currentNo;

    this._previousNo=this._currentNo;
    this._currentNo=sum;

    return sum;
  }
}

let obj=new fibonacci(0,1);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
