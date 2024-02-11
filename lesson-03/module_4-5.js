//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const human = {
//     username: "John",
//     hobby: "football",
//     age: 22,

//     greet() {
//         console.log(`Hello ${this.username}`)
//      }
// }
// const human2 = Object.create(human)
// human2.username = "Elena"

// for (const key in human2) {
//     if (human2.hasOwnProperty(key)) {
// console.log(key);
//     }
// }
// human.hobby = "skydiving"
// human["age"] = 25

// console.log(human);

// console.log(human2);
// human2.greet()
// human.greet()
// console.log(human.username);

//TODO:============task-02==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.
// const square = {
//     heigth: 100,
//     width: 150,

//     calculateArea() {
//         return this.heigth * this.width
//     }
// }
// console.log(square.calculateArea());

//TODO:============task-03==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.
// const store = {
//   goods: ['apple', 'banana', 'kiwi'],

//   hasProduct(good) {
//     return this.goods.includes(good);
//   },
//   addProduct(newProduct) {
//     this.goods.push(newProduct);
//   },
// };

// console.log(store.hasProduct('tomato'));
// store.addProduct('tomato');
// console.log(store.goods);
// console.log(store.hasProduct('tomato'));

//TODO:============task-04==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.
// const cart = {
//     product: ["apple", "banana", "kiwi"],
//     prices: [10, 20, 30],
//     calculateTotal() {
//         let sum = 0;
//         for (let price of this.prices) {
//             sum += price
//         }
//         return sum;
//     }
// }
// console.log(cart.calculateTotal());
// window.console.log(1, 2, 3)
//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-01======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// console.log(Object.values(salaries));
// let sum = 0;
// for (const number of Object.values(salaries)) {
//     sum = + number;

// }
// console.log(sum);

//TODO:============task-02======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };

// function checkObject(obj) {
//     return Object.entries(obj);
// }

// console.log(checkObject(user));

//TODO:============task-03======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (typeof obj[key] === "number") {
//                 obj[key] *= 2;
//             }

//         }
//     }
//     return obj;
// }

// console.log(multiplyNumeric(menu));
// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//! Робота з масивом об'єктів
//TODO:============task-04==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];

// function findTopStudent(array) {
//     let topStudent = array[0];
//     for (let student of array) {
//         if (student.grade > topStudent.grade) {
//             topStudent = student;
//        }
//     }
//     return topStudent;
// }

// console.log(findTopStudent(students));

//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// function performOperation(a, b, callback) {
//   return callback(a * b);
// }
// function callbackFunction(number) {
//   return number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number);
// }

// function isEven(number) {
//   return number % 2 === 0 ? 'even' : 'odd';
// }

// const result = performOperation(21, 43, callbackFunction);
// const result2 = performOperation(21, 43, isEven);

// console.log(result);
// console.log(result2);

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const getNewArray = arr => arr.map(el => el ** 2);

// const res = getNewArray(numbers);
// console.log(res);
// console.log(numbers);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flatArray = arr => arr.flatMap(el => el.values);

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const checkAge = arr => arr.some(el => el.age < 20);

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray = arr => arr.every(el => el % 2 === 0);

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];

// const getNumber = arr => arr.find(el => el > 3);

// const res = getNumber(numbers);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const sortedArray = arr => arr.toSorted((a, b) => a - b);

// const numbersArray = [4, 2, 5, 1, 3];

// const res = sortedArray(numbersArray);
// console.log(res);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedArray = arr => arr.toSorted((a, b) => a.localeCompare(b));

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'Jane', age: 31 },
//   { name: 'John', age: 27 },
//   { name: 'Bob', age: 19 },
// ];

// const ageSortedUsers = arr =>
//   arr.toSorted((a, b) => a.name.localeCompare(b.name));

// const res = ageSortedUsers(users);
// console.log(res);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const getAge = arr => arr.filter(el => el.age > 20);

// const res = getAge(user, 25);
// console.log(res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = arr => arr.reduce((acc, el) => acc + el, 0);

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];

// const res = averageValue(arr);
// console.log(res);

//!For each

// const numbers = [1, 2, 3, 4, 5];
// const newArr = [];
// const sum = arr => arr.forEach(el => newArr.push(el ** 2));

// sum(numbers);
// console.log(newArr);

//!Ланцюжок

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];

// console.log(
//   students
//     .map(el => el.name)
//     .toSorted((a, b) => b.localeCompare(a))
//     .find(el => el === 'Андрій')
// );

//* .map під капотом ;)

// const newArr = [];

// for (let i = 0; i < students.length; i += 1) {
//   newArr.push(students[i].name + '!!!');
// }

// console.log(newArr);
