// 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати
// клас `success`. Якщо ж символів менше аніж 6, то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте,
// то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то
// `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте,
// то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то
// `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні
// з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий
// чек бокс у положення true, якщо користувач все виконав вірно, збери данні
// (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну
// із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а
// потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення false, верни
// дефолтне значення "Anonymous" у span.

// const input = document.querySelector('.js-username-input');
// input.addEventListener('input', handlerInput);
// // console.log(input);

// function handlerInput(event) {
//   console.log(event.target.value);
//   const inputValue = event.target.value.trim();
//   //   inputValue.length > 6
//   //     ? input.classList.add(`success`)
//   //     : input.classList.add(`error`);
//   if (inputValue.length > 6) {
//     input.classList.remove(`error`);
//     input.classList.add(`success`);
//   } else {
//     input.classList.remove(`success`);
//     input.classList.add(`error`);
//   }
// }

const form = document.querySelector('.js-contact-form');
// console.log(form);

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.userName.value;
  const checkBoxValue = event.currentTarget.elements.accept.checked;
  if (!inputValue || !checkBoxValue) {
    return alert('error');
  }
  console.log('send');
  event.currentTarget.reset();
}

// const films = [
//   {
//     title: 'Tetris',
//     imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
//     id: 'film_1',
//   },
//   {
//     title: 'Avatar: The Way of Water',
//     imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
//     id: 'film_2',
//   },
//   {
//     title: 'Operation Fortune: Ruse de guerre',
//     imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
//     id: 'film_3',
//   },
//   {
//     title: 'Babylon',
//     imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
//     id: 'film_4',
//   },
//   {
//     title: 'The Whale',
//     imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
//     id: 'film_5',
//   },
// ];

// // Приклад елементу списку
// const listElement = document.querySelector('.gallary');

// function createMarkup(films) {
//   return films
//     .map(
//       film =>
//         ` <li id="${film.id}">
//       <img src="${film.imgUrl}" alt="${film.title}" />
//       <p class="text">${film.title}</p>
//     </li>`
//     )
//     .join('');
// }

// listElement.innerHTML = createMarkup(films);

// const firstLi = document.querySelector('#film_1');

// firstLi.lastElementChild.style.color = 'green';
