//window.onload = initFunction;
//
//function initFunction(){
//        var a = {};
//        for(var i=0; i<3; i++){
//                (function(j){
//                    a[j] = function(){
//                        console.log(j);
//                        };    
//                })(i);
//        }
//        a[0];
//        a[1];
//        a[2];
//}

//function init() {
//    var name = "Mozilla"; // name is a local variable created by init
//    function displayName() { // displayName() is the inner function, a closure
//        alert (name); // displayName() uses variable declared in the parent function    
//    }
//    displayName();    
//}
//init();


//function makeFunc() {
//  var name = "Mozilla";
//  function displayName() {
//    alert(name);
//  }
//  return displayName;
//}
//
//var myFunc = makeFunc();
//myFunc();

//function makeAdder(x) {
//  return function(y) {
//    return x + y;
//  };
//}
//
//var add5 = makeAdder(5);
//var add10 = makeAdder(10);
//
//console.log(add5(2));  // 7
//console.log(add10(2)); // 12

//Emulating private methods with closures

//var counter = (function() {
//  var privateCounter = 0;
//  function changeBy(val) {
//    privateCounter += val;
//  }
//  return {
//    increment: function() {
//      changeBy(1);
//    },
//    decrement: function() {
//      changeBy(-1);
//    },
//    value: function() {
//      return privateCounter;
//    }
//  };   
//})();
//
//console.log(counter.value()); // logs 0
//counter.increment();
//counter.increment();
//console.log(counter.value()); // logs 2
//counter.decrement();
//console.log(counter.value()); // logs 1
