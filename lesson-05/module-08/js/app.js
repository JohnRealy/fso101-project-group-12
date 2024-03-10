//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[accordion.html](./accordion.html) та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const list = document.querySelector('.js-accordion-list');
list.addEventListener('click', onBtnClick);
function onBtnClick(event) {
  const btn = event.target;
  if (btn.nodeName !== 'BUTTON') {
    return;
  }
  btn.nextElementSibling.classList.toggle('active');

  console.log(event.target);
}

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу[pagination.html](./pagination.html) для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

const listEl = document.querySelector('.js-pagination');

listEl.addEventListener('click', onClick);

function onClick(e) {
  const btn = e.target;
  const activeBtn = e.currentTarget.querySelector('.active');
  if (btn.nodeName !== 'LI') {
    return;
  }
  if (btn.dataset.type === 'page') {
    btn.classList.toggle('active');
    activeBtn.classList.toggle('active');
    return;
  }
  if (
    btn.dataset.type === 'prev' &&
    activeBtn.previousElementSibling.dataset.type === 'page'
  ) {
    activeBtn.classList.toggle('active');
    activeBtn.previousElementSibling.classList.toggle('active');
    return;
  }
  if (
    btn.dataset.type === 'next' &&
    activeBtn.nextElementSibling.dataset.type === 'page'
  ) {
    activeBtn.classList.toggle('active');
    activeBtn.nextElementSibling.classList.toggle('active');
  }
}

//TODO:=========task-03=======Modal==========
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку".
  |  2 - Реалізувати закриття модального вікна по кліку на крестик і по "ESC". Не забувай знімати слухача події "keydown" після закриття модального вікна.
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 3 функції onOpenModalBtnElClick, closeModalWindow, onEscClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Відображення модельного вікна реалізуй заа допомогою бібліотеки basicLightbox і його метода "basicLightbox.create".
  |============================
  
*/

/**
  |============Розмітка для модального вікна================
  <div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

  <form class="login-form js-modal__form">
    <label>
      Name
      <input type="text" name="name" placeholder="enter your name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="enter your email" />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
  |============================
*/
