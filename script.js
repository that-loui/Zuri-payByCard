import {
  inputs,
  input1,
  input2,
  input3,
  input4,
  output1,
  output2,
  output3,
  output4,
  cardType,
  nameInput,
  nameOutput,
  month,
  monthOut,
  year,
  yearOut,
  cvv,
  form,
  validateForm,
  Main,
  success,
  dismiss,
  UI,
} from './ui.js';
// general event for numbers field
inputs.forEach((input, index, array) => {
  input.addEventListener('input', () => {
    // check if input is valid and change focus
    if (UI.validateInput(input)) {
      UI.changeFocus(input, index, array, nameInput);
      UI.outputInput(input1, output1);
      UI.outputInput(input2, output2);
      UI.outputInput(input3, output3);
      UI.outputInput(input4, output4);
    }
    if (input.classList.contains('number1')) {
      UI.changeCardType(input1, cardType);
    }
  });
});
nameInput.addEventListener('input', (e) => {
  if (UI.validateInputLetter(e.target)) {
    UI.outputInput(nameInput, nameOutput);
  }
});
month.addEventListener('change', () => {
  if (month.value != '') {
    UI.outputInput(month, monthOut);
  }
});
year.addEventListener('change', () => {
  if (year.value != '') {
    UI.outputInput(year, yearOut);
  }
});
cvv.addEventListener('input', (e) => {
  UI.validateInput(e.target);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm()
    .then(() => {
      UI.displayElement(Main, success);
    })
    .catch((err) => {
      console.log(err);
    });
});
dismiss.addEventListener('click', () => {
  UI.displayElement(success, Main);
  form.reset();
  UI.outputInput(input1, output1);
  UI.outputInput(input2, output2);
  UI.outputInput(input3, output3);
  UI.outputInput(input4, output4);
  UI.removeOutput(nameOutput);
  UI.removeOutput(monthOut);
  UI.removeOutput(yearOut);
});
