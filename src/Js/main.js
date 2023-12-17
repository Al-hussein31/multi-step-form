'use strict';

const buttons = document.querySelectorAll('.buttons');
const sections = document.querySelectorAll('.sections');
const link = document.querySelectorAll('.side-nav__link');
const cards = document.querySelectorAll('.form__card');
const year = document.querySelectorAll('.yearly');
const buttonsConfirm = document.querySelector('.buttons-confirm');
const secFour = document.getElementById('section--4');
const secFive = document.getElementById('section--5');
const sideNavOne = document.querySelector('.side-nav__link--1');
const sideFour = document.querySelector('.side-four');
const errorMessage = document.querySelectorAll('.error-message');
const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('.form__input');
const formInputsEmail = document.querySelector('.email-input');
const formInputsNumber = document.querySelector('.number-input');
const formInputsName = document.querySelector('.name-input');
const formDays = document.querySelectorAll('.form__footer-text');
const monthlyInput = document.querySelectorAll('.month-amount');
const services = document.querySelectorAll('.wrapper__bottom-bottom');
const monthText = document.querySelector('.month-text');
const monthTotal = document.querySelector('.month-total');
const cardContainer = document.querySelector('.form__cards');
const finishUpText = document.getElementById('card-text');
const finishUpAmount = document.querySelector('.amount--2 ');

//////////////////////FUNCTions///////////////////////////

// 3. Form Validation
const validateFormEmail = function () {
  // Add more robust email validation
  const emailInput = document.querySelector('.error-message-email');
  const isValidEmail = /\S+@\S+\.\S+/.test(formInputsEmail.value);

  if (formInputsEmail.value === '' || !isValidEmail) {
    emailInput.classList.remove('hidden');
    return false;
  } else {
    emailInput.classList.add('hidden');
  }

  return true;
};
const validateFormNumber = function () {
  const numberInput = document.querySelector('.error-message-number');

  if (formInputsNumber.value === '') {
    numberInput.classList.remove('hidden');

    return false; // Prevent form submission
  } else {
    numberInput.classList.add('hidden');
  }

  return true; // Allow form submission
};
const validateFormName = function () {
  const nameInput = document.querySelector('.error-message-name');

  if (formInputsName.value === '') {
    nameInput.classList.remove('hidden');

    return false; // Prevent form submission
  } else {
    nameInput.classList.add('hidden');
  }

  return true; // Allow form submission
};
const removeErrorMessage = function () {
  errorMessage.forEach(text => {
    text.classList.add('hidden');
  });
};

const revelSection = function () {
  sections.forEach(section => {
    section.classList.add('hidden');
  });
};

const revelYears = function () {
  year.forEach(amount => {
    amount.classList.remove('hidden');
  });
};

const disableYears = function () {
  year.forEach(amount => {
    amount.classList.add('hidden'); // Use remove instead of add
  });
};

const addYearsPrice = function () {
  monthlyInput.forEach(input => {
    let textContent = input.textContent;
    const match = textContent.match(/\$(\d+(\.\d{1,2})?)\/mo/);

    if (match) {
      const numS = parseFloat(match[1]);
      const yearlyAmount = isNaN(numS) ? 'Invalid input' : `+$${numS * 10}/yr`;
      input.textContent = yearlyAmount;
    } else {
      console.error('Invalid input format in addYearsPrice');
    }
  });

  const yearText = `(Yearly)`;
  monthText.textContent = yearText;

  const yearTotal = `(per year)`;
  monthTotal.textContent = yearTotal;

  year.forEach(amount => {
    amount.classList.remove('hidden');
  });
};

const removeYearsPrice = function () {
  monthlyInput.forEach(input => {
    let textContent = input.textContent;
    const match = textContent.match(/\$(\d+(\.\d{1,2})?)\/yr/);
    if (match) {
      const numS = parseFloat(match[1]);
      const monthAmount = isNaN(numS) ? 'Invalid input' : `+$${numS / 10}/mo`;
      input.textContent = monthAmount;
    } else {
      console.log('Invalid input format');
    }
  });

  const monthTextNormal = `(Monthly)`;
  monthText.textContent = monthTextNormal;

  const monthTotalNormal = `(per month)`;
  monthTotal.textContent = monthTotalNormal;

  year.forEach(amount => {
    amount.classList.add('hidden'); // Use remove instead of add
  });
};

const addHiddenClass = function (e) {
  e.classList.add('hidden');
};

const removeHiddenClass = function (e) {
  e.classList.remove('hidden');
};
const addActiveClassSideBar = function (e) {
  e.classList.add('side-nav__link--active');
};

const removeActiveClassSideBar = function (e) {
  e.classList.remove('side-nav__link--active');
};
const addActiveClassCards = function (e) {
  e.classList.add('form__card--active');
};
const removeActiveClassCards = function (e) {
  e.classList.remove('form__card--active');
};
const addActiveClassBoxs = function (e) {
  e.classList.add('form__box--active');
};
const removeActiveClassBoxs = function (e) {
  e.classList.remove('form__box--active');
};
const finishUpAmountCalc = function (amounts) {
  const sum = amounts.reduce((accumulator, currentValue) => {
    // Extract the numeric value and the sign
    const matches = currentValue.match(/([-+]?\d+(\.\d+)?)/);

    if (matches) {
      const numericValue = parseFloat(matches[1]) || 0;
      const sign = currentValue.includes('-') ? -1 : 1;

      return accumulator + sign * numericValue;
    }

    return accumulator;
  }, 0);

  return sum;
};
const addActiveClassDay = function (e) {
  e.classList.add('form__footer-text--active');
};
const removeActiveClassDay = function (e) {
  e.classList.remove('form__footer-text--active');
};
const getFirstWord = function (inputString) {
  const firstWordMatch = inputString.match(/^\w+/);
  const firstWord = firstWordMatch ? firstWordMatch[0] : '';
  return firstWord;
};
const getLastWord = function (inputString) {
  const lastWordMatch = inputString.match(/(?:\S+\s)?(\S+)$/);
  const lastWord = lastWordMatch ? lastWordMatch[1] : '';
  return lastWord;
};
const getMiddleWord = function (inputString) {
  // Match the middle word in the format Pro +$150/YR 2 months free
  const middleWordMatch = inputString.match(/(?:\S+\s)?(\+\$\d+(?:\/\w+)?)\s/);
  const middleWord = middleWordMatch ? middleWordMatch[1] : '';
  return middleWord;
};
//////////////////////EVENTListeners FIXME///////////////////////////

document.addEventListener('click', function (e) {
  const targetLink = e.target.closest('.side-nav__link');
  if (targetLink) {
    e.preventDefault();
    const id = targetLink.getAttribute('href').substring(1);
    const targetSection = document.getElementById(id);

    if (targetSection) {
      const formInputsArray = Array.from(formInputs);
      const isTextEmpty = formInputsArray.some(input => input.value === '');

      if (isTextEmpty) {
        e.preventDefault();
        validateFormEmail();
        validateFormName();
        validateFormNumber();
        return;
      } else {
        removeErrorMessage();
      }

      revelSection();
      removeHiddenClass(targetSection);
      link.forEach(btn => removeActiveClassSideBar(btn));
      addActiveClassSideBar(targetLink);
    }
  }
});

buttons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    link.forEach(link => removeActiveClassSideBar(link));
    const id = btn.getAttribute('href').substring(1);
    const clickedLink = document.querySelector(
      `.side-nav__link[href="#${id}"]`
    );
    if (clickedLink) {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        // Convert NodeList to an array
        const formInputsArray = [...formInputs];
        // Check if any form input is empty
        const isTextEmpty = formInputsArray.some(input => input.value === '');
        if (!isTextEmpty) {
          addActiveClassSideBar(clickedLink);
        }
        if (isTextEmpty) {
          // Prevent the default button click action
          e.preventDefault();
          addActiveClassSideBar(sideNavOne);
          validateFormEmail();
          validateFormName();
          validateFormNumber();
          return;
        } else {
          removeErrorMessage();
        }
        // Add 'hidden' class to all sections
        revelSection();
        // Remove the 'hidden' class from the target section
        removeHiddenClass(targetSection);
      }
    }
  });
});

buttonsConfirm.addEventListener('click', function () {
  addHiddenClass(secFour);
  removeHiddenClass(secFive);
  addActiveClassSideBar(sideFour);
});

let number = [];

form.addEventListener('click', function (e) {
  const btn = e.target;
  if (btn.classList.contains('form__card')) {
    // Guard clause
    if (!btn) return;
    cards.forEach(btn => removeActiveClassCards(btn));
    addActiveClassCards(btn);
    const inputString = btn.innerText;

    // Get the first word using the getFirstWord function
    const firstWord = getFirstWord(inputString);
    finishUpText.textContent = firstWord;

    const lastWord = getLastWord(inputString);
    const middleWord = getMiddleWord(inputString);
    const array1 = [middleWord[6]];
    const array2 = [middleWord[7]];
    const resultString = array1.join('') + array2.join('');
    const resultStringLowerCase = resultString.toLocaleLowerCase();

    finishUpAmount.textContent = lastWord;

    if (finishUpAmount.textContent === 'free') {
      finishUpAmount.textContent = middleWord;
    }

    const amountSPickAddOns = document.querySelectorAll('.amount--3');
    const amountSPickAddOnsTotal = document.querySelector('.amount--4');
    const arrayOne = finishUpAmount.textContent;
    const arrTwo = amountSPickAddOns[0].textContent;
    const arrThree = amountSPickAddOns[1].textContent;
    // console.log(arrTwo, arrThree);

    number = [arrTwo, arrThree, arrayOne];

    const total = finishUpAmountCalc(number);
    const totalLs = `$${total}/mo`;
    amountSPickAddOnsTotal.textContent = totalLs;

    if (resultStringLowerCase) {
      const totalLs = `$${total}/${resultStringLowerCase}`;
      amountSPickAddOnsTotal.textContent = totalLs;
    } else {
      const totalLs = `$${total}/mo`;
      amountSPickAddOnsTotal.textContent = totalLs;
    }
  }

  if (btn.classList.contains('form__footer-text')) {
    // Guard clause
    if (!btn) return;
    formDays.forEach(btn => removeActiveClassDay(btn));
    addActiveClassDay(btn);
    if (btn.classList.contains('form__footer-text--year')) {
      addYearsPrice();
    } else {
      removeYearsPrice();
    }
  }
  if (btn.classList.contains('form__box-radio')) {
    const btn = e.target.closest('.form__box');
    // Guard clause
    if (!btn) return;
    if (btn.classList.contains('form__box--active')) {
      removeActiveClassBoxs(btn);
    } else addActiveClassBoxs(btn);
  }
});
