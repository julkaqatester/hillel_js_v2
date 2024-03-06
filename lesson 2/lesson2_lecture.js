/**
 У програмуванні оператор - це символ або ключове слово, яке вказує комп'ютеру виконати певну дію або операцію над даними.

 Операнд - це термін, який використовується в програмуванні та математиці для позначення значень чи об'єктів, 
 над якими виконується операція.
 У контексті операторів, які виконують різні дії, операнди є значеннями, до яких ці операції застосовуються.

 Тобто 4 + 3 оператор плюс(+) з лівим та правим операндами.
 */


// ---Арифметичні операції---
/**
 - Додавання (+)
 - Віднімання (-)
 - Поділ (/)
 - Множення (*)
 - Залишок від поділу (%)
 - зведення в ступінь (**)
 - Інкремент (++)
 - Декремент (--)
 - Унарний плюс (+)
 - Унарний мінус (-)
 */

// Додавання (+)
/* var num = 5 + 4;
console.log(num) // Тут все просто */

// Оператор + можна використовувати з рядками. В результаті ми отримаємо "склеєний" рядок.
// console.log("This is my " + "code");

// А що буде якщо я спробую додати не тільки числа
/* var result = true + 10;
console.log(result) // І що ми отримаємо?

var boolResult = true + false;
console.log(boolResult); // І що ми отримаємо?  */

// Але + не завжди вам просто додавання
/* var result = "qwerty" + 25;
console.log(result);
console.log(typeof result); */

/* var a = '11';
var b = 23;
var c = a + b;
console.log(c); */ // І що ми отримаємо ? 

/* var result = "QaProIsCool:" + true;
console.log(result) */






/* JavaScript, при конкатенації рядка з булевим значенням, булеве значення перетворюється в рядок. 
В даному випадку, true перетворюється в рядок "true". */


//Побічний ефект: унарний '+' - завжди призводить до числа!

/* var a = '55';
console.log(typeof a);
console.log(typeof +a); // сюрприз? */
/**
В JavaScript унарний плюс (+) не має особливого впливу на числа. 
Це означає, що застосування унарного плюса перед числом не змінює його значення.

Однак, унарний плюс виконує перетворення до числа (coercion) для значень, які не є числами. 
 */

/* var boolValue = true;
console.log(boolValue, typeof boolValue); // Виводить true (булеве)

var convertedFromBool = +boolValue;
console.log(convertedFromBool, typeof convertedFromBool); // Виводить 1 (число) */

/* var c = +null;
console.log(c, typeof c); */

// Віднімання (-)
/* var num = 5 - 4;
console.log(num) // Тут все просто */

/* var result = "55" - 5;
console.log(result);  */


//Або давайте спробуємо множення. Js завжди намагається привести все до числа.
// let x = 10;
// let y = 5;
// let multiply = x * y; 
// console.log("The multiplication is " + multiply)

/* var result = true * 5;
console.log(result) */

// Ну і знов доречно згадати про Nan
/*var result = "Hello" * 5;
console.log(result)*/


// Скорочення записів за допомогою операторів += та *=:
/* let n = 2;
n += 5; // n = n + 5
n *= 2; // n = n * 2
console.log(n);  */

//а якщо так?
/* let n = 2;
 n *= 3 + 5; // 1) спочатку 3 + 5 2) потім множимо на 2
 console.log(n);  */

//---Інкремент/декремент---  - це збільшення або зменшення на одиницю є однією з найпоширеніших числових операцій.

/* let counter = 2;
//counter = counter + 1; 
counter++;      
console.log( counter );  */

/* Коли оператор йде !!за!! змінною, він у “постфіксній формі”: counter++. 
“Префіксна форма” – це коли оператор йде !!попереду!! змінної: ++counter.
У рядку (*), префіксна форма ++counter збільшує counter та повертає нове значення, 2. Отже, показує 2. */

/* let counter = 2;
counter = ++counter; 
console.log(counter);
 */
/* Але! Чому не використовувати 1 варіант? */

/* let counter = 2;
let a = ++counter; 
console.log(a);

let counter1 = 2;
console.log('counter1 start value: ' + counter1); 
let a1 = counter1++; 
console.log('a1  value: ' + a1); 
console.log('counter1 end value: ' + counter1);  */

/* Бо вони різні!
   коли є “постфіксна форма”: counter++* спочатку проводить ОПЕРАЦІЯ, а потім ІНКРЕМЕНТ
   тобто, на нашому прикладі:
   1) створюємо змінну counter1
   2) створюємо змінну a1
   3) беремо поточне значення counter1, яке дорівнює 2 та присвоюємо це значення змінній a1
   4) потім збільшується значення counter1 на 1.
   5) виведення значення змінній a1
   */


   //Як перевірити чи четне число?






//Залишок від поділу (%)
// console.log(12 % 6);
// console.log(12 % 5);
// console.log(4 % 3);
// console.log(-4 % 3);
// console.log(-6 % 2); // !!!! Дуже цікаво!)
// console.log(NaN % 2);


/** --- Правоасоціативні та лівоасоціативні оператори ---
- це терміни,які використовуються для опису напрямку асоціації (групування) операторів з однаковим пріоритетом у виразах.
 Ці терміни особливо важливі при виразах з однаковими або різними операторами, які мають однаковий пріоритет.


Приклад лівоасоціативної операції
Лівоасоціативні оператори обчислюються зліва направо. 
Це означає, що вирази вираховуються в порядку, в якому вони написані. 

Наприклад, у виразі a + b + c, оператор + лівоасоціативний, і спочатку виконується додавання a + b, 
а потім до його результату додається c.
*/

//var a = 5 + 6 + 7;

/* Приклад правоасоціативної операції
Правоасоціативні оператори, навпаки, обчислюються справа наліво. Це означає, що вирази вираховуються в зворотному порядку. 

Наприклад, у виразі a = b = c, оператор присвоєння = є правоасоціативним, і він обчислюється спочатку для b = c, 
а потім результат присвоюється a.
 */

/* var a = 5;
var b = 7;
var c = a = b;
console.log(c) // ??? */

//----Зведення в ступінь (**) ---
// console.log(2 ** 3);
// console.log(2 ** 3 ** 2); // Ось в такому випадку виконується правоасоціативна операція
// console.log(-2 ** 2); // Так не підходить
// console.log(-(2 ** 2));
// console.log((-2) ** 2);

/** ----Операції присвоювання---

 - Присвоєння
 - Присвоєння з додаванням
 - Присвоєння з відніманням
 - Присвоєння з множенням
 - Присвоєння з розподілом
 - Присвоэння по модулю
 */

// Присвоєння
/*
var a = 5;
var b = 10;
var c = b;
c = a = b;
console.log(c);*/

//Присвоєння з додаванням
/*var number = 15;
number += 10; // Це так само як number = number + 10;
console.log(number)

var result = true;
result += true;
console.log(result)*/

//Присвоєння з відніманням
/*var number = 5;
number -=5;
console.log(number);*/

//Присвоєння з множенням
/*var number = 20;
number *= 2;
console.log(number);*/

//Присвоєння з розподілом
/*var number = 20;
number /= 2;
console.log(number);*/

//Присвоэння по модулю
/*var number = 20;
number %= 2;
console.log(number);*/

/** --- Операції порівняння ---

 У JavaScript існують різноманітні оператори порівняння,
 які дозволяють порівнювати значення та здійснювати логічні порівняння між ними. 
 Ось декілька основних операторів порівняння:

 - Оператор рівності (==)
 - Оператор нерівності (!=)
 - Оператор строгої рівності (===)
 - Оператор строгої нерівності (!==)
 - Оператор більше (>)
 - Оператор менше (<)
 - Оператор більше або рівно (>=)
 - Оператор менше або рівно (<=)

 Завжди приводяться до false
 - null
 - NaN
 - 0
 - '' пуста строка
 - undefined
 - 0n
 Все інше true!

 Js завжди намагається привести все до числа. */

/*Оператор рівності (==) - Порівнює два значення на рівність (за значенням),
 і повертає true, якщо вони рівні, і false - якщо нерівні. Враховує автоматичне приведення типів. */

/* console.log('2' == 1);
console.log('001'== 1);
console.log(true == 1);
console.log(false == 1);
console.log('' == '0'); */ // А що буде тут ?

/* Оператор строгої рівності (===): порівнює два значення на рівність як за значенням, так і за типом даних.
 Повертає true, якщо значення рівні і мають однаковий тип, і false - якщо вони різні.*/

/* console.log('001'=== 1);
console.log(true === 1);
console.log(0 === false);
console.log('' === false);
console.log('' === 0);
console.log(1 === 1); */


// Оператор нерівності (!=)  Порівнює два значення на нерівність, і повертає true, якщо вони не рівні, і false - якщо рівні.

/* console.log(11 != 11);
console.log(1 != true)
console.log('' != false) */

/* Оператор строгої нерівності (!==): Порівнює два значення на нерівність як за значенням, так і за типом даних.
Повертає true, якщо значення різні або мають різний тип, і false - якщо вони рівні і мають однаковий тип. */

/* console.log(21 !== '21');
console.log(false !== 0);
console.log(23 !== 20); */

//  Оператор більше (>), Оператор менше (<), Оператор більше або рівно (>=), Оператор менше або рівно (<=).
/* console.log(5 > 2);
console.log(false > true);
console.log(true > 0) */

//Делікатна тема – порівняння рядків.
/* console.log('a'>'b');
console.log('a'>'A'); // малі літери "більше" великих
console.log('A'>'1'); // великі "більше" цифр
console.log('1'>'$'); // цифри "більше" спецсимволів */

// Все набагато простіше, яка літера стоїть раніше у таблиці unicode, та і буде меншою, яка пізніше більшою.

//Порівняння рядків більше ніж з одного символу - як у телефонній книзі.
/* console.log('Ба'>'Аяяяяяяяяяя'); // На першій літері переможець
console.log('ваня'>'вася');
console.log('Привіт'>'Прив');  */

//Дуже особливий випадок: null та undefined
/*  console.log( null === undefined );
 console.log( null == undefined ); */

/* var undef;
var n = null;
console.log(undef == null); //Просто так вирішили. undefined і null рівні один одному і НІ ЩО БІЛЬШЕ!
console.log(n == null);
console.log(undef == undefined); */

//А тепер жесть. Що робить + ?
/* console.log('null as number: ' + (+null) );
console.log('undefined as number: ' + (+undefined) ); */

//Наслідки цієї начебто незначної деталі:
/* console.log('null > 0: ' + (null > 0) );
console.log('null < 0: ' + (null < 0) );
console.log('null == 0: ' + (null == 0) );
console.log('null >= 0: ' + (null >= 0) ); //!!!! Що ?!)) */

//С undefined схожа історія
/* console.log('undefined > 0: ' + (undefined > 0));
console.log('undefined < 0: ' + (undefined < 0));
console.log('undefined == 0: ' + (undefined == 0));
console.log('undefined >= 0: ' + (undefined >= 0)); // Але ось тут false */

/* З погляду математики це дивно.
 Результат останнього порівняння показує, що "null більше або дорівнює нулю", в
  такому випадку результат одного з порівнянь вище повинен бути true, але вони обидва false.

  Причина в тому що нестроге порівняння '==' і порівняння '>' '<' '>=' '<=' працюють по-різному. 
  Останні оператори конвертують null в число, розглядаючи його як 0. 
  Ось чому вираз null >= 0 дає true, а вираз null > 0 — false.
  
  З іншого боку, для нестрогого порівняння ('==') значень undefined і null діє окреме правило:
  ці значення не перетворюються на інші типи, вони рівні один одному і не рівні будь-чому іншому. 
  Ось чому вираз null == 0 повертає результат false. */


//І ще одна мила особливість: NaN не дорівнює взагалі нічого, навіть собі самому
/* var a = "Hello" * 3; //???
console.log('a = ' + a);
console.log('a === NaN? ' + (a === NaN));
console.log('a == NaN? ' + (a == NaN));
console.log('a > NaN ' + (a > NaN));
console.log('a < NaN ' + (a < NaN)); */
 
/**
  ---Булеві оператори----
 
 У JavaScript булеві оператори використовуються для логічних операцій над булевими значеннями (true або false).

 Ось деякі з основних булевих операторів в JavaScript:
 Логічний оператор "І" (AND): && - повертає true, якщо обидва операнди є true, інакше повертає false.
 Логічний оператор "АБО" (OR): || - повертає true, якщо хоча б один з операндів є true, інакше повертає false.
 Логічний оператор "НІ" (NOT): ! - інвертує булеве значення. Наприклад, !true поверне false, а !false поверне true.

 Все перетворюється на boolean. При цьому 0, '', null, undefined, NaN => все перетворюється на false
 Решта - true!!
 */

// У оператора "і" ("and")  короткий цикл - обчислення припиняються, як тільки знаходимо false
/* var a = 19;
var b = 15;
var res = (a > b) && true;
console.log(res); */

//Але якщо ми все ж таки дійшли до кінця - повертається останнє обчислене значення
/* var x;
var res = true && (x = 5) && 'А рядок наводиться до true';
console.log(res); */

//Короткий цикл перевірки "або" - виходимо, як тільки знайшли хоч один true
/* var x;
var n = null;
var res = false | n || x || 'Просто рядок' || (x = 5) | true;
console.log(res); // Цікаво, що опиниться у цій змінній?
console.log(x); //А тут? */

// !
/* console.log(!true);
console.log(!false);
console.log(!'');
console.log(!0);
console.log(!null);
console.log(!undefined); */

//------------------------------------------------------------------------------------------------------------------------

/**--- Умовні конструкції ---

 У JavaScript є кілька умовних конструкцій, які дозволяють вам виконувати код в залежності від певних умов.
 Основні умовні конструкції включають if, else if, else та switch.

 У JavaScript, if...else - це керуюча конструкція, яка використовується для умовного виконання коду. 
 Ця конструкція дозволяє виконувати певний блок коду, якщо задана умова виконується (істинна), та інший блок коду, 
 якщо умова не виконується (хибна).
 */

 if (умова) { //умова - вираз або логічний вираз, який оцінюється на true або false.
    // Код, який виконується, якщо умова істинна
} else {
    // Код, який виконується, якщо умова не є істинною
}


/* const number = 16;

if (number % 2 === 0) {
    console.log("Число парне");
} else {
    console.log("Число непарне");
} */

//Найпростіший випадок
// var age = 17;
// if(age > 18) console.log("Є доступ!");

// if(true) console.log("Hi bool");

// if ('text') console.log("Hi text");

// if("") console.log("Null"); // ??





// Ще раз NaN, 0, null, undefined, '' це false. Все інше true

//Якщо одним рядком не обійдешся
/* var age = 22;
if (age > 18) {
    age += 10;
    console.log("Тепер мені " + age);
} */

//можливі варіанти
/* let salary = 100;
if (salary < 100){
    console.log("Маленька ЗП")
} else {
    console.log("Вже краще")
} */

//Повна форма запису
/* let salary = 1099;
if (salary < 1000){
    console.log("Маленька ЗП")
} else if (salary === 1000){
    console.log("Вже краще")
} else {
    console.log("Супер")
} */

/* --- Тернарнийоператор ---
Тернарний оператор - операція, яка повертає свій другий чи третій операнд, 
залежно від значення логічного виразу, заданого першим операндом.

Тернарний оператор – скорочений запис if…else, що використовується для отримання 
одного значення та подальшого його використання або для ініціалізації змінної, або у 
складі іншого виразу.

змінна = умова ? значення_якщо_умова_істина : значення_якщо_умова_хибна

Цим оператором не варто зловживати. Його слід використовувати насамперед для 
ініціалізації змінних. При використанні його для інших цілей код може ставати менш 
читабельним.*/

/* let birthday = 27;
let discount = (birthday === 25) ? "30%" : "10%";
console.log(discount); */

// Як би це виглядало через if. У випадках коли умов мало, та ми одразу хочемо присвоїти чомусь значення,
// краще використати тернарний оператор.
/* let birthday = 25;
let discount;
if (birthday === 25){
    discount = "30%"
} else {
    discount = "10%"
} */

// І ніхто нам не забороняє робити все разом.
/* let sex = 'male';
let birthday = 25;
let discount;
if (sex === 'male'){
    discount = (birthday === 25) ? "30%" : "10%";
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
} */

// --- Повернемось ло логічних операторів ---
// || (АБО / OR), && (І / AND), ! (НЕ / NOT), ?? (оператор null-об’єднання). 

/*  || (АБО). Якщо будь-який з його аргументів означає true, повертається true, інакше повертається false.
console.log( true || true );  
console.log( false || true );  
console.log( true || false ); 
console.log( false || false ); */

/* if (1 || 0) { 
    console.log( 'правдиво!' );
  } */


/* let hour = 12;
if (hour < 10 || hour > 18) {  //24 pm
    console.log( 'Офіс зачинений.' );
} */

// АБО "||" знаходить перше правдиве значення
/* console.log( 1 || 0 );
console.log( null || 1);
console.log( undefined || null || 0); */

/* let firstName = "";
let lastName = "";
let nickName = "СуперКодер";
console.log( firstName || lastName || nickName || "Анонім"); */

// && (І). У класичному програмуванні І повертає true, якщо !!!обидва!!! оператори є правдивими, і false в іншому випадку
/* console.log( true && true );   
console.log( false && true );  
console.log( true && false );  
console.log( false && false );  */

/* let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  console.log( 'Час: 12:30' );
} */

/* if (1 && 0) { 
    console.log( "Сюди зайде?" );
  } */

//Оскільки обидва значення (1 і 5) є "правильними", вираз 1 && 5 повертає !!!останнє!!! значення, тобто 5. 
/* console.log( 1 && 0 ); 
console.log( 1 && 5 ); */ 

/* console.log( 1 && 2 && null && 3 && undefined);  // якщо є false, повертає перший false
console.log( 1 && 2 && 3 ); // якщо усі  true, то повертає останній true */

/* Пріоритетність операторів
Пріорітетність операторів в JavaScript визначає, яка операція виразу виконується першою, а яка - пізніше, коли вираз містить більше одного оператора. 
Це важливо для розуміння порядку обчислень в виразах. 
Оператори з вищим пріорітетом виконуються раніше, ніж ті, у яких пріорітет нижчий.

Основні правила пріорітетності операторів в JavaScript:

Порівняння і арифметика: Арифметичні операції, такі як додавання і множення, мають вищий пріоритет над операціями порівняння. Наприклад, вираз 2 + 3 > 4 буде обчислений як (2 + 3) > 4, що дорівнює 5 > 4.

Логічні операції: Операції "І" (&&) мають вищий пріоритет над операціями "АБО" (||). 
Наприклад, вираз true || false && true буде обчислений як true || (false && true), що дорівнює true.

Присвоєння: Оператори присвоєння, такі як =, мають найнижчий пріоритет. 
Наприклад, вираз x = 5 + 3 буде обчислений як x = (5 + 3), і значення 8 буде присвоєно змінній x.

Групування: Вирази в дужках завжди мають найвищий пріоритет, і вони обчислюються першими. 
Наприклад, вираз 2 * (3 + 4) буде обчислений як 2 * 7, що дорівнює 14.

*/

/* let result = 2 + 2 * 2;
console.log(result) */

/* let result = 2 + 3 * 4; //У цьому прикладі арифметична операція множення має вищий пріоритет, тому вираз обчислюється як 2 + (3 * 4), що дорівнює 14.
console.log(result)
 */

//let isValid = (age >= 18) && (hasPermission || isGuest); //У цьому прикладі операції порівняння і логічні операції обчислюються відповідно до пріоритету, і результат присвоюється змінній isValid.


/* Пріоритет І (&&) вище за АБО (||)
 Наприклад, код   a && b || c && d    по суті є таким самим, як код з виразами && у дужках: (a && b) || (c && d). 
 
 2 * 2 + 2 * 2

 */


 /* Ще раз:
 || (АБО). Якщо будь-який з його аргументів означає true, повертається true, інакше повертається false.
  && (І) повертає true, якщо !!!обидва!!! оператори є правдивими, і false в іншому випадку
 */

//Що виведе код нижче?
// console.log( null || 2 || undefined );

// console.log(1 && null && 2);

// console.log( null || (2 && 3) || 4 ); 

//Чи виконається if?
/* if (-1 || 0) console.log( 'перший' );

if (-1 && 0) console.log( 'другий' );

if (null || -1 && 1) console.log( 'третій' );

console.log((+null == false) < 1 ** 5)  */

//---------------------------------------------------------------------------------------

/* --- switch ---
У JavaScript switch - це інструкція для умовного розгалуження коду, 
яка дозволяє вибрати один з численних блоків коду для виконання на основі значення виразу. 
switch особливо корисний, коли потрібно зробити велику кількість варіантів у випадку, 
коли змінна приймає різні значення.

Ключове слово break у блоці case дозволяє припинити подальше виконання інструкцій 
та вийти за межі switch. Якщо breаk не встановлений, виконання переходить до 
наступного блоку case, і так або до першого ключового слова break, або до виходу за 
межі конструкції switch.*/


switch (вираз) { //вираз - вираз, значення якого порівнюється з варіантами case.
    case значення1:
        // Код, який виконується, якщо вираз дорівнює значенню1
        break;
    case значення2:
        // Код, який виконується, якщо вираз дорівнює значенню2
        break;
    // інші варіанти
    default:
        // Код, який виконується, якщо вираз не співпадає з жодним зі значень
};

/* var a = 12;
switch (a) {
    case 1:
        console.log('варіант 1');
        break;
    case 2:
        console.log('варіант 2');
        break;
    case 3:
        console.log('варіант 3');
        break;
    case 4:
        console.log('варіант 4');
        break;
    case 5:
        console.log('варіант 5');
        break;
    default:
        console.log('Що ???');
} */


//switch при порівнянні використовує === і це важливо!
//var num = '1';
/*  var num = 1;
switch (num) {
    case 1:
        console.log("Number!")
        break
    case '1':
        console.log('String'); 
        break;
    default:
        console.log('Що ???');
} */

//---------------------------------------------------------------------------------------

/*
try...catch - це механізм обробки виключень в JavaScript, 
який дозволяє вам управляти помилками і виконувати додатковий код, якщо виникає помилка. 
Використовуючи try...catch, ви можете забезпечити більш стабільну роботу програми, 
уникнувши її зупинки при виникненні помилок.
*/

try {
    // Код, який може викликати помилку
} catch (error) {
    // Код, який виконується, якщо виникає помилка
};

//Приклад 1
/* const result = 10 / 0;
console.log("Результат: " + result); */


//Якщо додамо обробку помилок?

/* function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Ділення на нуль недопустиме.");
        }
        return a / b;
    } catch (error) {
        console.error("Помилка: " + error.message);
        return null;
    }
}

const result = divide(10, 0);
if (result === null) {
    console.log("Ділення не вдалося.");
} else {
    console.log("Результат: " + result);
}; */

//try...catch допомагає уникнути краху програми при помилках, дозволяючи вам обробляти їх і вживати відповідні заходи, наприклад, виведення повідомлення про помилку і продовження роботи програми.

//Приклад 2
   /*  const user = {
      name: "John"
    };

    console.error(user.age); */



//Якщо додамо обробку помилок?
/* try {
    const user = {
      name: "John"
    };
    
    // Створення помилки
    if (!user.age) {
      throw new Error("В користувача не вказано вік");
    }
    
    console.log(user.age); // Спроба отримати вік користувача
  } catch (error) {
    console.error("Помилка: " + error.message);
    // Виводимо інформацію про помилку
  }; */


  /* --- Конструкція try...catch...finally ---
  finally - блок коду, який виконується завжди, незалежно від наявності помилки. 
  Цей блок є необов'язковим, але корисним для виконання завершальних операцій.
  */


  //Використання try...catch...finally для читання файлу та закриття файлового ресурсу навіть у випадку помилки:
  const fs = require('fs');
let fileContent;

/* try {
    const filePath = 'example.txt';
    fileContent = fs.readFileSync(filePath, 'utf8');
    console.log('Файл прочитано успішно.');
} catch (error) {
    console.error('Помилка читання файлу: ' + error.message);
} finally {
    console.log('Завершення операції, навіть якщо сталася помилка.');
}; */

//Використання try...catch...finally для роботи з ресурсами (наприклад, закриття бази даних):
/* function openDatabase() {
    console.log('База даних відкрита.');
    // Відкриваємо базу даних
}

function closeDatabase() {
    console.log('Закриваємо базу даних.');
    // Закриваємо базу даних
}

try {
    openDatabase();
    // Виконуємо операції з базою даних
} catch (error) {
    console.error('Помилка роботи з базою даних: ' + error.message);
} finally {
    closeDatabase();
    console.log('Завершення операцій з базою даних, навіть якщо сталася помилка.');
}; */

//try...catch...finally дозволяє забезпечити правильне закриття ресурсів і виконання завершальних дій, навіть якщо виникають помилки у спробах.

//---------------------------------------------------------------------------------------

/* Взаємодія: alert, prompt, confirm

https://uk.javascript.info/alert-prompt-confirm

% % % https://www.tiktok.com/@devslopes/video/7155268974446513454 -% % %

*/
//---------------------------------------------------------------------------------------

/* Additional materials:

w3school
https://www.w3schools.com/js/js_type_conversion.asp
https://www.w3schools.com/js/js_if_else.asp
https://www.w3schools.com/js/js_switch.asp

javascript info
https://javascript.info/type-conversions
https://uk.javascript.info/operators
https://uk.javascript.info/comparison
https://uk.javascript.info/ifelse
https://uk.javascript.info/logical-operators

Others:
https://www.programiz.com/javascript/type-conversion

https://www.geeksforgeeks.org/javascript-type-conversion/

https://medium.com/@13__TOMMY/type-conversion-javascript-basics-a6c55e71cada

https://dev.to/alexanie_/javascript-type-conversions-1p3g
*/