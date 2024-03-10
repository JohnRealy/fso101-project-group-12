// ## 1. Counter

// - Створи файли html і js (./counter.html, ./counter.js)
// - Отримай всі кнопки з атрибутом data-action
// - До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
// - При кліку на кнопку data-action="save" зберігай значення counter у local
//   storage
// - При кліку на кнопку data-action="clear-save" видаляй збережене значення
//   counter з local storage
// - При кліку на кнопку data-action="decrease" зменшуй counter на 1
// - При кліку на кнопку data-action="increase" збільшуй counter на 1
// - При кліку на кнопку data-action="reset" роби counter = 0

const controlsBtn = document.querySelector('.js-counter-controls');
const savesBtn = document.querySelector('.save js-save');
const display = document.querySelector('.js-counter-value');

let counter = 0;

function onControlClick(event) {
  const btn = event.target.dataset.action;

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (btn === 'decrease') {
    counter -= 1;
  }

  if (btn === 'increase') {
    counter += 1;
  }

  if (btn === 'reset') {
    counter = 0;
  }

  display.textContent = counter;
}
