class Setup {

}

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var NUMBER_WIZARDS = 4;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  var wizardsContainer = document.querySelector('.setup-similar-list');

  function openPopup() {
    setup.classList.remove('hidden');
  }

  function closePopup() {
    setup.classList.add('hidden');
    setup.removeAttribute('style');
  }

  function popupKeyDownHandler(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
    if (
      (evt.keyCode === ESC_KEYCODE &&
        document.activeElement !== window.userName)
    ) {
      closePopup();
    }
    if (
      document.activeElement === setupClose &&
      evt.keyCode === ENTER_KEYCODE
    ) {
      closePopup();
    }
  }

  setupOpen.addEventListener('click', openPopup);
  setupClose.addEventListener('click', closePopup);
  document.addEventListener('keydown', popupKeyDownHandler);

  window.backend.onLoad()
    .then(data => {

      const wizardsArr = window.utils.generateRandomArr(data, NUMBER_WIZARDS);
      const wizards = window.wizards.renderWizards(wizardsArr);

      wizardsContainer.appendChild(wizards);
      document.querySelector('.setup-similar').classList.remove('hidden');

    })


  window.setup = {
    NUMBER_WIZARDS,
    closePopup,
    wizardsContainer
  };

})();
