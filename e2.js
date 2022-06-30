//module
//addition
exports.add = function(a, b) {
    return a + b;
}

//subtraction
exports.sub = function(a, b) {
    return a - b;
}
//multiplication
exports.mul = function(a, b) {
    return a * b;
}
//division
exports.div = function(a, b){
    if(b != 0) {
        return a / b;
    }
    return 0;
}