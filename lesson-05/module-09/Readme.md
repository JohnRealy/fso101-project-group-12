## 1. Counter

- Створи файли html і js (./counter.html, ./counter.js)
- Отримай всі кнопки з атрибутом data-action
- До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
- При кліку на кнопку data-action="save" зберігай значення counter у local
  storage
- При кліку на кнопку data-action="clear-save" видаляй збережене значення
  counter з local storage
- При кліку на кнопку data-action="decrease" зменшуй counter на 1
- При кліку на кнопку data-action="increase" збільшуй counter на 1
- При кліку на кнопку data-action="reset" роби counter = 0

## 2. Theme switcher

- Створи файли html і js (./themeSwitch.html, ./themeSwitch.js)
- Використовуй local storage для зберігання вибраної теми (dark / light)

```js
const themeSwitcher = document.getElementById('theme-switch');

// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;

function onCheckBoxChange() {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // don't forget about themeSwitcher, if current theme is dark, it should be checked
}
```
