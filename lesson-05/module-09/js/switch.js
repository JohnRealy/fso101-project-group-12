const switcher = document.querySelector('#theme-switch');
const body = document.body;

switcher.addEventListener('click', onCheckboxChanged);

const LS_KEY = 'switcher';

function onCheckboxChanged() {
  console.log(switcher.checked);
  if (switcher.checked) {
    body.classList.replace('light', 'dark');
    localStorage.setItem(LS_KEY, 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem(LS_KEY, 'light');
  }
}

function renderPage() {
  const lsdata = localStorage.getItem(LS_KEY);
  if (lsdata === 'dark') {
    switcher.checked = true;
    body.classList.replace('light', 'dark');
  } else {
    body.classList.replace('dark', 'light');
  }
}
renderPage();
