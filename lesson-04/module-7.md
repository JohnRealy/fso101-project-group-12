# Модуль 7. DOM i events

## 1. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

```js
const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;
```

## 2. Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

```css
.number-сontainer {
  display: flex;
  flex-wrap: wrap;
}

.number {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
}

.even {
  background-color: #8bc34a;
}

.odd {
  background-color: #ffeb3b;
}
```

```js
const randomNumber = Math.floor(Math.random() * 100) + 1;
```

## 3. Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію `createMarkup()`, яка буде повертати розмітку. Додай розмітку на сторінку задопомогою `insertAdjacentHTML()` і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

```js
const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

// Приклад елементу списку
// <li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ['film_2', 'film_4', 'film_5'];

function createMarkup() {}
```

# Модуль 7. Form Events, Input, Focus, Blur and Submit.

1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати
клас `success`. Якщо ж символів менше аніж 6, то клас `error`

2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте,
то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то
`outline` => `'3px solid green'`

3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте,
то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то
`outline` => `'3px solid lime'`

4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні
з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий
чек бокс у положення true, якщо користувач все виконав вірно, збери данні
(userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну
із умов, виведи повідомлення. Також реалізуй додавання
ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а
потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous".
При відправці форми, очисти інпут, верни чек бокс у положення false, верни
дефолтне значення "Anonymous" у span.

```html
<form class="contact-form js-contact-form">
  <input
    name="userName"
    type="text"
    class="contact-form-input js-username-input"
    data-length="8"
    required
    placeholder="Your name"
  />
  <label class="js-policy-label">
    <input
      type="checkbox"
      name="accept"
      class="contact-form-checkbox js-policy-checkbox"
    />
    Я <span class="js-username-output">Anonymous</span> погоджуюсь із політикою
    конфіденційності
  </label>
  <button type="submit" class="contact-form-btn js-contact-form-submit">
    Відправити
  </button>
</form>
```

```css
.contact-form {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.contact-form-input {
  height: 40px;
  border: 1px solid #cccccc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.contact-form-btn {
  margin-top: 20px;
}

.success {
  outline: 3px solid greenyellow;
}

.error {
  outline: 3px solid red;
}

span {
  text-decoration: underline;
}
```
