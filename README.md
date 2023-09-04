## ZURI TASK SOLUTION

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a pay by card checkout page 

### The challenge

Users should be able to:

- 
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - 
  - 
  - 
  - 
- View the optimal layout for the interface depending on their device's screen size
- 

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- I started out by building the HTML syntax, arranging the elements properly, then I styled each element accordingly,
  In the Javascript I started by declaring all the elements from the DOM and exporting them to module
- I created a function to validate that the input fields are not empty and are accurate.
- I created another function to check the number entered in the first input field for card numbers and change the card type based on the value.
- I create a function that serves as a general validation function and resolves if all validations are true.

- I added some other utility functions to add and remove displays

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Used this to practice my usage of promises

```js
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
```

with your own learnings.\*\*

### Continued development

i tried to create my own library of Ui functions

## Author

- Website - [Add your name here](https://www.your-site.com)
- Zuri Student ID[]
- Twitter - [@LMacjob](https://www.twitter.com/LMacjob)

