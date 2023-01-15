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

  return {
    htmlForm,
    htmlEmail,
    htmlCountry,
    htmlZipCode,
    htmlPassword,
    htmlPasswordConfirmation,
    htmlSubmit,
    htmlInfo,
  };
})();

const eventListeners = (function getEventListeners() {
  const submitForm = () => {
    domElements.htmlSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      domElements.htmlInfo.innerHTML = 'High Five';
    });
  };

  return {
    submitForm,
  };
})();

eventListeners.submitForm();
