var fibonacci = /** @class */ (function () {
    function fibonacci(_previousNo, _currentNo) {
        this._previousNo = _previousNo;
        this._currentNo = _currentNo;
    }
    fibonacci.prototype.next = function () {
        var sum = Symbol();
        console.log(typeof sum);
        sum = this._previousNo + this._currentNo;
        this._previousNo = this._currentNo;
        this._currentNo = sum;
        return sum;
    };
    return fibonacci;
}());
var obj = new fibonacci(0, 1);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
