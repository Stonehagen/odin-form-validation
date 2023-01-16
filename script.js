/* eslint-disable wrap-iife */
const domElements = (function getDomElements() {
  const htmlForm = document.querySelector('form');
  const htmlEmail = htmlForm.querySelector('#email');
  const htmlCountry = htmlForm.querySelector('#country');
  const htmlZipCode = htmlForm.querySelector('#zip-code');
  const htmlPassword = htmlForm.querySelector('#password');
  const htmlPasswordConfirmation = htmlForm.querySelector(
    '#password-confirmation',
  );
  const htmlSubmit = htmlForm.querySelector('button');
  const htmlInfo = htmlForm.querySelector('#info');

  const htmlValidationInputs = {
    'an Email Adress': htmlEmail,
    'a Country': htmlCountry,
    'a Zip Code': htmlZipCode,
    'a Password': htmlPassword,
    'the Password again': htmlPasswordConfirmation,
  };

  return {
    htmlForm,
    htmlEmail,
    htmlCountry,
    htmlZipCode,
    htmlPassword,
    htmlPasswordConfirmation,
    htmlSubmit,
    htmlInfo,
    htmlValidationInputs,
  };
})();

const checkValidation = (function getCheckValidation() {
  let errorMessage = '';

  const setErrorMessage = () => {
    domElements.htmlInfo.innerHTML = errorMessage;
  };

  const getErrorMessage = () => errorMessage;

  const checkTypeMisamatch = (inputField, inputType) => {
    const errorText = `Please provide ${inputType}!`;
    if (errorMessage === errorText) {
      errorMessage = '';
    }
    if (inputField.validity.typeMismatch || inputField.value === '') {
      if (errorMessage === '') {
        errorMessage = errorText;
      }
    }

    setErrorMessage();
  };

  const checkAll = () => {
    Object.entries(domElements.htmlValidationInputs).forEach((input) => {
      checkTypeMisamatch(input[1], input[0]);
    });
  };

  return {
    setErrorMessage,
    getErrorMessage,
    checkTypeMisamatch,
    checkAll,
  };
})();

const eventListeners = (function getEventListeners() {
  const focusoutEl = (inputField, inputType) => {
    inputField.addEventListener('focusout', () => {
      checkValidation.checkTypeMisamatch(inputField, inputType);
    });
  };

  const inputEmail = () => {
    focusoutEl(domElements.htmlEmail, 'an Email Adress');
  };

  const inputCountry = () => {
    focusoutEl(domElements.htmlCountry, 'a County');
  };

  const inputZipCode = () => {
    focusoutEl(domElements.htmlZipCode, 'a Zip Code');
  };

  const inputPassword = () => {
    focusoutEl(domElements.htmlPassword, 'a Password');
  };
  const inputPasswordConfirmation = () => {
    focusoutEl(domElements.htmlPasswordConfirmation, 'the Password again');
  };

  const formInput = () => {
    inputEmail();
    inputCountry();
    inputZipCode();
    inputPassword();
    inputPasswordConfirmation();
  };

  const submitForm = () => {
    domElements.htmlSubmit.addEventListener('click', (e) => {
      checkValidation.checkAll();
      if (checkValidation.getErrorMessage() === '') {
        domElements.htmlInfo.innerHTML = 'High-Five';
      } else {
        eventListeners.formInput();
      }
      e.preventDefault();
    });
  };

  return {
    submitForm,
    formInput,
  };
})();

eventListeners.submitForm();
eventListeners.formInput();
