'use strict';

(function () {
  const setupForm = document.querySelector('.setup-wizard-form');
  const setupWizard = document.querySelector('.setup-player');
  const userName = document.querySelector('.setup-user-name');
  const filter = new Filter();

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

  function customizeWizard(evt, data) {
    const wizardCoat = setupWizard.querySelector('.wizard-coat');
    const wizardEyes = setupWizard.querySelector('.wizard-eyes');
    const setupFireball = setupWizard.querySelector('.setup-fireball');

    if (evt.target === wizardCoat) {
      setupForm.elements['coat-color'].value = window.utils.getRandomElementArr(window.wizards.COAT_COLORS);
      evt.target.style.fill = setupForm.elements['coat-color'].value;

      const filteredWizardsArr = [...filter.filtered(data), ...data];

      filteredWizardsArr.splice(window.setup.NUMBER_WIZARDS);

      const filteredWizardsFragment = window.wizards.renderWizards(filteredWizardsArr);

      window.setup.wizardsContainer.innerHTML = '';
      window.setup.wizardsContainer.append(filteredWizardsFragment);

    }
    if (evt.target === wizardEyes) {
      setupForm.elements['eyes-color'].value = window.utils.getRandomElementArr(window.wizards.EYES_COLORS);
      evt.target.style.fill = setupForm.elements['eyes-color'].value;

      const filteredWizardsArr = [...filter.filtered(data), ...data];

      filteredWizardsArr.splice(window.setup.NUMBER_WIZARDS);

      const filteredWizardsFragment = window.wizards.renderWizards(filteredWizardsArr);

      window.setup.wizardsContainer.innerHTML = '';
      window.setup.wizardsContainer.append(filteredWizardsFragment);
    }
    if (evt.target === setupFireball) {
      setupForm.elements['fireball-color'].value = window.utils.getRandomElementArr(window.wizards.FIREBALL_COLORS);
      evt.target.parentNode.style.background = setupForm.elements['fireball-color'].value;
    }
  }

  window.backend.onLoad()
    .then(data => {
      userName.addEventListener('invalid', validateFormField);

      setupWizard.addEventListener('click', (evt) => {
        customizeWizard(evt, data);
      });

    })

  setupForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(setupForm);

    try {
      window.backend.onSave(formData);
      window.setup.closePopup();
    } catch (e) {
      console.error(e.message);
    }
  })

  window.userName = userName;

})();
