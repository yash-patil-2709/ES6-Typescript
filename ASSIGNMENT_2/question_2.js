function armStrongNumber() {
    return {
        next: function getArmStrong() {
            var num;
            var r;
            var sum;
            var temp;
            for (num = 1; num <= 1000; num++) {
                digits = num.toString().length;
                temp = num;
                sum = 0;
                while (temp != 0) {
                    r = temp % 10;
                    temp = parseInt(temp / 10);
                    sum += Math.pow(r, digits);
                }
                if (sum == num)
                    console.log(num);
            }
        }
    };
}
var number = armStrongNumber();
console.log(number.next());
