/*
  Математичні оператори (+, -, *, /, %, **)
*/

/*
 ? Дано два числа 10 та 20.
 ? Проведіть над цими числами математичні операції (+ - / * ).
*/

// const a = 10;
// const b = '6';
// const c = 15;
// const d = 2.6;
// const e = '2.552%';
// const s = '#2.33';

// console.log(Math.min(a, b, c));
// console.log(Math.max(a, b, c));

// console.log(Math.floor(d));
// console.log(Math.ceil(d));
// console.log(Math.round(d));
// console.log(Number(b));
// console.log(b);

// const result = e.replace(',', '.');
// console.log(parseFloat(result).toFixed(1));

// console.log(parseFloat(e));

// const result = s.replace('#', '');
// console.log(Number(result));

/*
  Конкатенація рядків, шаблонні рядки
 */

// const strA = 'hello';
// const strB = 'world';
// const result = strA + " " + strB;
// console.log(result);
// const userName = 'Tom';
// const age = 14;
// console.log('Hello' + " " + userName + " " + 'your age is' + " " + age);
// console.log(`Hello ${userName} your age is ${age}`);
// console.log(`Hello ${userName}`);

// const userName = 'Tom';
// console.log(userName.length);

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/

// const str = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// console.log(str.includes('JavaScript'));
// console.log(str.includes('JS'));
// console.log(str.indexOf('JS'));
// console.log(str[0]);
// console.log(str.startsWith('H'));
// console.log(str.endsWith('+'));

// const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(str);
// console.log(str.replaceAll('dog', 'cat'));

// let sameDate = '12-01-2024';
// const result = sameDate.replaceAll('-', '.');
// console.log(sameDate);
// console.log(result);

// const str = 'Hello, World';
// const result = str.slice(-1, 6);
// console.log(`${result}...`);

// const str = 'Hello, World';
// const result = str.slice(3);
// console.log(`${result}...`);
// console.log(str.split(',').join('-').replace(' ', ''));

// function showUserMessage(userName, price, quantity) {
// const totalPrice = price * quantity // проміжкова константа
//    return `Дякуємо, ${userName}! До сплати ${price * quantity} грн.`;
// }
// console.log(showUserMessage('Alice', 5000, 200));
// console.log(showUserMessage('Alex', 1000, 65));
