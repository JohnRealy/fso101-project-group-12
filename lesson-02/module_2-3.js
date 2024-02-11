//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';
// if (str.toLowerCase.startsWith('a')) {
//     console.log('Yes');
// } else { console.log("no"); }

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 60. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту). Виведіть значення у консоль, або alert

// const min = 35;
// if (min >=0 && min < 15) {
//     console.log( '1 part');
// } else if (min >= 15 && min < 30) {
//     console.log("2 part");
// } else if (min >= 30 && min < 45) {
//     console.log("3part");
// } else if (min >= 45 && min <= 60) {
//     console.log("4part");
// }
// else {
//     console.log('errore');
//    }

//* Тернарний оператор
//TODO: 3 ===================================
// Перевірити, чи є введене користувачем число парним чи непарним, і вивести відповідне повідомлення. Використай promt і виведи повідомлення в alert. (використати тернарний оператор)

// const number = 47;

// console.log(number % 2 === 1 ? 'odd' : 'even');

//TODO: 4 ===================================
// Перепишіть if..else на тернарний оператор, за допомогою декількох операторів '?'.

// const login = 'Співробітник';
// let message = '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// const message =
//   login === 'Співробітник'
//     ? 'Привіт'
//     : login == 'Директор'
//     ? 'Вітаю'
//     : login === ''
//     ? 'Немає логіну'
//     : '';

// console.log(message);

//* Цикл while and do while
//TODO: 5 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let counter = 0;

// while (counter <= 50) {
//   console.log(counter);
//   counter += 1;
// }

//TODO: 6 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let total = 0;
// let input;
// do {
//   input = prompt('Введіть число: ');
//   if (input === null) break;
//   input = parseFloat(input);
//   if (!isNaN(input)) {
//     total += input;
//   }
// } while (true);

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

// TODO: 7 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let number = 90;

// while (number < 100) {
//   number = parseFloat(prompt('введіть число більше 100'));
// }
// console.log(number);

//* Цикл for
//TODO: 8 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *******

// let star = '';
// for (let i = 0; i < 7; i += 1) {
//   //console.log(i);
//   star += '*';
//   console.log(star);
// }

//TODO: 9 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const number = 30;
// for (let i = 1; i <= number; i += 1) {
//   // console.log(i);
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzbuzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else {
//     console.log(i);
//   }
// }

//* Конструкція switch
//TODO: 13 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 4;
// let result;
// switch (num) {
//     case 1:
//         result = "winter";
//         break;
// case 2:
//         result = "spring";
//         break;
//     case 3:
//         result = "summer";
//         break;
//     case 4:
//         result = "autumn";
//         break;
//     default:
//         result = "Error"
//         break;
// }
// console.log(result);

// ! Масиви і функції
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// // styles.unshift(1);
// // styles[1] = "Класика";
// const index = styles.indexOf("Блюз");
// styles[index] = "Класика";

// console.log(styles.shift());
// console.log(styles);

//TODO:=========task-02================= HOMEWORK!!!
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.
// const str = 'JavaScript, HTML, CSS, React';
// const masStr = str.split(",");
// masStr.forEach(item => console.log(item));

//TODO:=========task-03=================
// Знайти кількість слів у рядку, використовуючи методи масивів та цикл for...of.
// const message = 'JavaScript is a popular programming language.';
// const masMessage = message.split(" ");
// console.log(masMessage);
// console.log(masMessage.length);
// let sm = 0;
// for (let item of masMessage) {
//     sm += 1;
// }
// console.log(sm);
//TODO:=========task-04=================
// Об'єднати масив слів в рядок, розділений комами та пробілами.
// const words = ['JavaScript', 'HTML', 'CSS', 'React'];

// console.log(words.join(","));
//TODO:=========task-05=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const stringArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';
// const newArr = [];
// for (let item of stringArray) {
//     if (item.includes(substring)) {
//         newArr.push(item);
//     }
// }
// const joinedArray = newArr.join(", ")
// console.log(
//   `Масив елементів, що містять підстроку ${substring} : ${joinedArray}`
// );

//TODO:=========task-06=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
//  const array = ['JavaScript', 'HTML', 'CSS', 'SS'];
//  const elem = 'SS';
// for (let i = 0; i <= array.length - 1; i++) {
//     if (array[i] === elem) {
//       array.splice(i,1);
//     }
// }
// console.log(array);
// if (array.includes(elem)) {
//       console.log(array);
// } else {
//     array.push(elem);
//     }

// console.log(array);
// const newArrayDel = array.filter(item => item !== elem);
// console.log(newArrayDel);

//TODO:============task-07==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") return "Error";
//     // return Math.min(a, b);
//     return a < b ? a : b;
// }
// console.log(min(5, 10));

//TODO:=============task-08=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// function sumAdjacentNumbers(array) {

//     const newArr = [];
//     for (let i = 0; i < array.length -1; i++) {
//         console.log(array[i]);
//        newArr.push(array[i] + array[i+1])
//     }
//     return newArr;
// }

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:=========task-09=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа. Array.from()
// function calculateAverage(...args) {
//     if (!Array.isArray(args)){ return alert("not array")}
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         // console.log(typeof(args[i]));
//         if (typeof(args[i]) === "number") {
//             sum += args[i];
//         } else {return ' Errore '}
//     }
//     return sum / args.length;
//  args.reduce((sum, item) => { return sum + item }, 0);
// }
//  console.log(calculateAverage(10, 10, 20, 200));
//  console.log(calculateAverage(10, 10, 'hyj', 200));

// console.log(Array.isArray([]));

function calculateAverage() {
  const args = arguments;
  let sum = 0;
  let totalCount = 0;
  for (const arg of args) {
    if (typeof arg !== 'number') {
      continue;
    }
    sum += arg;
    totalCount += 1;
  }
  return sum / totalCount;
}

console.log(calculateAverage(10, 10, 20, 200));
//TODO:=============task-10=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку. `Містить ${count} голосних`

// const str = "This is a new line";
// const vowels = ["a", "e", "i", "o", "u"];
// function countVowels(str) {
//     const strArray = str.split("");
//     console.log(strArray);
//     let count = 0;
//     for (let i = 0; i < strArray.length; i++) {
//       for (let j = 0; j < vowels.length; j++) {
//           if (strArray[i] === vowels[j]) {
//               count += 1;
//         }

//       }

//     }
//     return `Містить ${count} голосних`;
// }
// console.log(countVowels(str));

//TODO:=========task-11=================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл з оператором break та continue.
// const numbers = [5, 11, 28, 8, 7, 15, 11, 20];
// function getOddNumbers(numbers) {

//     for (let item of numbers) {
//         if (item % 2 === 0 && item > 10) {
//             return item;
//         }
//     }
// }
// console.log(getOddNumbers(numbers));
