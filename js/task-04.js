let counterValue = 0;

const valueEl = document.querySelector('#value');
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');

incBtn.addEventListener('click', () => {
  counterValue++;
  valueEl.textContent = counterValue;
});

decBtn.addEventListener('click', () => {
  counterValue--;
  valueEl.textContent = counterValue;
});