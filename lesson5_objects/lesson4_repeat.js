// Навіщо return?

function sum() {
    5 + 5;
}
console.log(sum());



function sum() { // cпосіб 1
    return 5 + 5;
}
console.log(sum()); 



function sum() { // cпосіб 2
    console.log( 5 + 5);
}
sum();
















// Чому не працює?

var x = 3, y = 4;

function sum(x, y) {
    return x + y;
}
console.log(sum());














// Рішення
var x = 3, y = 4;

function sum(x, y) {
    return x + y;
}
console.log(sum(x, y));
console.log(sum(8, 9)); // функція потребує аргументів

















// Чому не працює?


function sum() {
    for (let i = 0; i < 5; i++) {
        let result += i;
    }
}
sum();







var result; // result потрібно спочатку проініціалізувати а потім робити операції

function sum() {
    for (let i = 0; i < 5; i++) {
        result += i;
    }
}
sum();




// Чому не працює?
var result = 0

function sum() {
    for (let i = 0; i < 5; i++) {
        return result += i;
    }
}
console.log(sum());





var result = 0

function sum() {
    for (let i = 0; i < 5; i++) {
        result += i;
    }
    return result
}
console.log(sum());


//У вашій функції sum() присутній оператор return всередині циклу for, тому після першого виклику циклу функція повертає значення та припиняє своє виконання, і жоден інший ітерація циклу не відбудеться.


/* --- Методи чисел (Number): --- 

- Перетворіть рядок "123" на число. */

let str = "123"
let str1 = Number.parseInt(str);
console.log (str1, typeof str1)

//- Перевірте, чи є значення NaN.

console.log(Number.isNaN(str))
console.log(Number.isNaN(str1))

// - Округлить число 3.14 до цілого числа

console.log(Math.round(3.14))

// - Знайдіть максимальне значення з двох чисел.

console.log(Math.max(3,14))

// - Перетворення рядка "123.45" на число з 2 десятковими знаками.

var chislo = "123.45"
console.log( Number.parseFloat(chislo));


// - Знаходження квадратного кореня числа 9.


console.log(Math.sqrt(3.14))

// --------------------------------------------------------------------------------------------------------------
// --- Методи рядків (String): ----

// - Перетворіть число 123 на рядок.

var chislo = 123.45
var str123 = String(chislo)
console.log(str123, typeof str123)


// - Перетворення рядка "привіт" у верхній регістр.

console.log("hi".toUpperCase())



// - Знаходження першого входження символу "о" в рядку "привіт".


console.log("hohoho".indexOf("o"))


// - Видалення пробілів з обох кінців рядка " привіт ".


console.log(" привіт ".trim())

// - Створіть функцію, яка замінює всі пробіли в рядку на підкреслення.


console.log(" привіт привіт привіт".replaceAll(" ","_"))
console.log(" привіт привіт привіт".replace(" ","_"))


// - Напишіть код, який виводить індекс останнього входження символу "о" в рядку "Aloha".

console.log("hohoho".lastIndexOf("o"))


// https://www.tiktok.com/@honey_baron/video/7291333654083685637

