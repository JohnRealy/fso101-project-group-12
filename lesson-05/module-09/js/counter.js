const controlsBtnEl = document.querySelector('.js-counter-controls');

const saveBtnEl = document.querySelector('.js-save');

const displayEl = document.querySelector('.js-counter-value');

controlsBtnEl.addEventListener('click', onControlsBtnClick);
saveBtnEl.addEventListener('click', onSaveClick);

let counter = 0;

const LS_KEY = 'counter';

function onControlsBtnClick(e) {
  const clickBtn = e.target.dataset.action;

  if (clickBtn === 'decrease') {
    counter -= 1;
  }
  if (clickBtn === 'increase') {
    counter += 1;
  }
  if (clickBtn === 'reset') {
    counter = 0;
  }
  displayEl.textContent = counter;
}

function onSaveClick(e) {
  const clickBtn = e.target.dataset.action;
  if (clickBtn === 'save') {
    localStorage.setItem(LS_KEY, counter);
  }
  if (clickBtn === 'clear-save') {
    localStorage.removeItem(LS_KEY);
  }
}

function renderPage() {
  const saveData = localStorage.getItem(LS_KEY);
  if (saveData) {
    counter = Number(saveData);
    displayEl.textContent = counter;
  }
}

renderPage();
