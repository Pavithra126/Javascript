let display = '';
let resultDisplayed = false;

function appendToDisplay(value) {
  if (resultDisplayed) {
    clearDisplay();
  }
  display += value;
  updateDisplay();
}

function clearDisplay() {
  display = '';
  updateDisplay();
}

function deleteFromDisplay() {
  display = display.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.querySelector('.calculator-display');
  displayElement.textContent = display;
}

function calculate() {
  try {
    const result = eval(display);
    display = String(result);
    resultDisplayed = true;
    updateDisplay();
  } catch (error) {
    display = 'Error';
    resultDisplayed = true;
    updateDisplay();
  }
}







