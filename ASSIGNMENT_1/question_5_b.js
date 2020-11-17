var userFriends = function (username) {
    var userfrnds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        userfrnds[_i - 1] = arguments[_i];
    }
    console.log(username);
    for (var i in userfrnds) {
        console.log(userfrnds[i]);
    }
};
userFriends("jake", ["Amy", "Rosa", "Charles"]);
