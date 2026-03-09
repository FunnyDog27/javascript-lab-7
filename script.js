const hoverBtn = document.getElementById('hoverBtn');
const mouseMessage = document.getElementById('mouseMessage');

hoverBtn.addEventListener('mouseenter', () => {
  mouseMessage.textContent = 'You are hovering over the button.';
});

hoverBtn.addEventListener('mouseleave', () => {
  mouseMessage.textContent = 'You moved the mouse away from the button.';
});

const keyboardInput = document.getElementById('keyboardInput');
const keyboardMessage = document.getElementById('keyboardMessage');

keyboardInput.addEventListener('keydown', (event) => {
  keyboardMessage.textContent = `Last key pressed: ${event.key}`;
});

const demoForm = document.getElementById('demoForm');
const nameInput = document.getElementById('nameInput');
const formMessage = document.getElementById('formMessage');

demoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  formMessage.classList.remove("success", "error");

  if (name === "") {
    formMessage.textContent = "Please enter your name before submitting.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.textContent = `Form submitted successfully. Hello, ${name}!`;
  formMessage.classList.add("success");
  demoForm.reset();
});

const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'The input field is currently focused.';
});

focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'The input field lost focus.';
});

const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');

buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    delegationMessage.textContent = `You clicked ${event.target.textContent}.`;
  }
});

const clearInputsBtn = document.getElementById("clearInputsBtn");

clearInputsBtn.addEventListener("click", function () {
  keyboardInput.value = "";
  nameInput.value = "";
  focusInput.value = "";
  charCount.textContent = "Character count: 0";
});