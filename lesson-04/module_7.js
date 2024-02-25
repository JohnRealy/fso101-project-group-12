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
