//Допишите код используя Promise

//А) Функция должна вывести ‘hi’ через 2 секунды

/*
function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

function logHi() {
    console.log('hi');
}
delay(2000).then(logHi);
*/


//Б) Одна из особенностей Promise, в том что они могут бесконечно вызывать .then()
/*
new Promise(function(resolve, reject) {
  // должно через 3 секунды передать дальше значение - 10
  setTimeout(() => resolve(10),3000);
}).then((result) => {
    console.log(result);
    return result*2;
  // должно вывести в console значение полученное и передать дальше
  // увеличенное на 2
}).then((result) => {
  // должно вывести в console значение полученное и передать дальше
  // увеличенное на 2 через 2 секунды
  return new Promise(function(resolve, reject) { 
    setTimeout(() => {
        console.log(result);
        resolve(result + 2);
    }, 2000)

});
}).then((result) => {
  // должно вывести конечный результат
  console.log(result);
});

*/


//В) Написать Promise который выводит console.log в случае если время выполнения не превысило 2 секунд, и console.error в случае если //превысило. Время должно определяться случайным образом, использовать внутренний обработчик ошибок для Promise
/*
function getRand(min, max){
    return (max-min)*Math.random()+min;
}


let promise = new Promise(function(resolve, reject) {
    let time = getRand(1000,3000);
    if(time > 2000) {
        setTimeout(() => reject(new Error("Время вышло!"), time));
    }
    else {
        setTimeout(() => resolve(time), time);
    }
});

promise.then(time => {
    console.log('Время выполнения: ' + time);
}, error => {
    console.error(error);
}).catch( e => console.log(e));
*/

//Г) Программа должна генерировать от 1 до 10 асинхронных функций, которые должны вывести в консоль номер функции и через сколько времени (так же определяется случайно от 1 до 10) сработал в ней console.log. Все эти функции должны работать параллельно. После окончания работы этих функций должен вывестись console.log поздравляющий вас с окончанием работы и отображающий сколько времени понадобилось на выполнение (максимальное значение 10 конечно)

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

let arr = [];
for(let i = 0; i < randomInteger(1,10); i += 1) {
    let seconds = randomInteger(1,10);
    let a = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('№ ' + (i + 1) + " seconds: " + seconds);
            return resolve();
        }, seconds*1000);
    })
    arr.push(a);
}

Promise.all(arr).then(() => console.log("Congradulations!"));
/*
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); 
});
*/
//Выведет: 
// [3, 1337, "foo"] 