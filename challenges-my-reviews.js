// OUTRO EXEMPLO 'CRAZY' BY MYSELF:
        function crazyCount(a, a1, a2) {
            return function(b, b1, b2) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return (a + a1 + a2) + (b + b1 + b2) + c + d + e;
                        }
                    }
                }
            }
        }
        console.log(crazyCount(2, 2, 1)(10, 4, 3)(3)(1)(7));
        // 33



function calculator(n1, n2){
    return function(callback){
        return callback(n1, n2);
    }
}
var sum = calculator(4,6);
console.log(sum(function(n1,n2){
    return n1 + n2;
}));





console.log(calculator(14,6)(function(n1,n2){
    return n1 + n2;
}));







function calculator(n1, n2){
    return function(){
        return function(){
            return n1 + n2;
        }
    }
}
var sum = calculator(24,6)()();
sum;
// 30

var sum = calculator(24,6);
sum()();







/*
REVISAR:

Reduce
Do-While.
Saltos.
For Each.
Map.


Every JS app developer needs to know:
-FP basics
-objects: composition vs inheritance
-async patterns (callbacks, promises, events, streams)

