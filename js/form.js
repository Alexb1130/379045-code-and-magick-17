'use strict';

(function () {
  var setupForm = document.querySelector('.setup-wizard-form');
  var setupWizard = document.querySelector('.setup-player');
  var userName = document.querySelector('.setup-user-name');

  function validateFormField() {
    if (userName.validity.tooShort) {
      userName.setCustomValidity('имя персонажа не может содержать менее 2 символов');
    } else if (userName.validity.tooLong) {
      userName.setCustomValidity('максимальная длина имени персонажа — 25 символов');
    } else if (userName.validity.valueMissing) {
      userName.setCustomValidity('имя персонажа не может быть пустым');
    } else {
      userName.setCustomValidity('');
    }
  }

  function customizeWizard(evt) {
    var wizardCoat = setupWizard.querySelector('.wizard-coat');
    var wizardEyes = setupWizard.querySelector('.wizard-eyes');
    var setupFireball = setupWizard.querySelector('.setup-fireball');

    if (evt.target === wizardCoat) {
      setupForm.elements['coat-color'].value = window.utils.getRandomElementArr(window.data.COAT_COLORS);
      evt.target.style.fill = setupForm.elements['coat-color'].value;
    }
    if (evt.target === wizardEyes) {
      setupForm.elements['eyes-color'].value = window.utils.getRandomElementArr(window.data.EYES_COLORS);
      evt.target.style.fill = setupForm.elements['eyes-color'].value;
    }
    if (evt.target === setupFireball) {
      setupForm.elements['fireball-color'].value = window.utils.getRandomElementArr(window.data.FIREBALL_COLORS);
      evt.target.parentNode.style.background = setupForm.elements['fireball-color'].value;
    }
  }

  userName.addEventListener('invalid', validateFormField);
  setupWizard.addEventListener('click', customizeWizard);

  window.userName = userName;

})();
