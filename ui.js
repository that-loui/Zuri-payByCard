export const inputs = document.querySelectorAll('.number');
export const input1 = document.querySelector('.number1');
export const input2 = document.querySelector('.number2');
export const input3 = document.querySelector('.number3');
export const input4 = document.querySelector('.number4');
export const output1 = document.querySelector('.out1');
export const output2 = document.querySelector('.out2');
export const output3 = document.querySelector('.out3');
export const output4 = document.querySelector('.out4');
export const cardType = document.querySelector('.cardType');
export const nameInput = document.querySelector('.name');
export const nameOutput = document.querySelector('.cardHolder');
export const month = document.getElementById('months');
export const year = document.getElementById('years');
export const cvv = document.getElementById('cvv');
export const monthOut = document.querySelector('.monthOut');
export const yearOut = document.querySelector('.yearOut');
export const form = document.querySelector('.form');
export const Main = document.querySelector('.container');
export const success = document.querySelector('.successMsg');
export const dismiss = document.querySelector('.dismiss');

export class UI {
  // ensure input is a number
  static validateInput(input) {
    // pattern for numbers
    let pattern = /^\d+$/.test(input.value);
    if (pattern) {
      console.log('valid Input');
      input.classList.remove('input-error');
      return true;
    } else if (pattern2) {
      console.log('valid input');
      input.classList.remove('input-error');
      return true;
    } else {
      console.log('invalid Input');
      input.classList.add('input-error');
      return false;
    }
  }
  static validateInputLetter(input) {
    let pattern2 = /^[A-Za-z]+ [A-Za-z]+$/.test(input.value);
    if (pattern2) {
      console.log('valid input');
      input.classList.remove('input-error');
      return true;
    } else {
      console.log('invalid Input');
      input.classList.add('input-error');
      return false;
    }
  }
  // check input type and display logo based on cardType
  static changeCardType(input, cardType) {
    if (input.value.startsWith('4')) {
      console.log('visaCard');
      cardType.style.backgroundImage =
        "url('./assets/Visa_Inc.-Logo.wine.svg')";
      input.classList.remove('input-error');
      return true;
    } else if (input.value.startsWith('5') || input.value.startsWith('2')) {
      console.log('masterCard');
      cardType.style.backgroundImage =
        "url('./assets/Mastercard-Logo.wine.svg')";
      input.classList.remove('input-error');
      return true;
    } else if (input.value.startsWith('3')) {
      cardType.style.backgroundImage =
        "url('./assets/American_Express-Logo.wine.svg')";
      console.log('americanExpress');
      input.classList.remove('input-error');
      return true;
    } else {
      cardType.style.backgroundImage =
        "url('./assets/Visa_Inc.-Logo.wine.svg')";
      console.log('invalid type');
      input.classList.add('input-error');
      return false;
    }
  }
  // change focus when input is filled
  static changeFocus(input, index, array, next) {
    if (input.value.length >= input.maxLength) {
      if (index + 1 < array.length) {
        array[index + 1].focus();
      } else {
        next.focus();
      }
      return true;
    }
  }
  //   input output function
  static outputInput(input, output) {
    if (input.value == '' && input.classList.contains('number')) {
      output.innerHTML = '0000';
      return false;
    } else {
      output.innerHTML = input.value;
      return true;
    }
  }
  //   display success message
  static displayElement(remove, display) {
    remove.style.display = 'none';
    display.style.display = 'flex';
  }
  static removeOutput(element) {
    element.innerHTML = '';
  }
}
export function validateForm() {
  return new Promise((resolve, reject) => {
    if (
      UI.validateInput(input1) &&
      UI.validateInput(input2) &&
      UI.validateInput(input3) &&
      UI.validateInput(input4) &&
      UI.validateInputLetter(nameInput) &&
      year.value != '' &&
      month.value != '' &&
      UI.validateInput(cvv) &&
      UI.changeCardType(input1, cardType)
    ) {
      console.log('perfect');
      resolve();
    } else {
      reject(new Error('invalid Input detected'));
      console.log('imperfect');
    }
  });
}
