//Выведите указанные внизу ответы

var Robot = function (name) {
	this.name = name;
}

function add (op1, op2) {
	this.name = this.name || "Human";
	return  this.name + " can count to " + (op1 + op2);
}

var voltron = new Robot("Voltron");

// #1 Выведите результат сложения 0 и 1
// "Human can count to 1"

console.log(add(1,0));

// #2 Выведи результат сложения Voltron 1 и 2 используя call
// “Voltron can count 3”

console.log(add.call(voltron, 1, 2));
// #3 Выведи результат сложения Voltron 20 и 30 используя apply
// “Voltron can count 50”

console.log(add.apply(voltron, [20,30]));


// #4 Выведи результат сложения Voltron «drinking» и «beer» используя bind
// “Voltron can count drinkingbeer”

/*var showName = function () { 
    add.bind(voltron, ["drinking", "beer"]);
     setTimeout( () => add, 1000); 
    }
    
console.log(showName());
*/

var showName = function () { 
        console.log(add.call(this,"drinking", "beer"));
    }.bind(voltron) 

setTimeout( showName, 1000); 
 // #5 Написанный вами код должен вывести console.log имени которое лежит в this.name пятью разными способами

 var showName = function () { 
        console.log(add.apply(this,["drinking", "beer"]));
    }.bind(voltron) 

setTimeout( showName, 1000);