class Wizard {

}

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var fragment = document.createDocumentFragment();

  function renderWizards(wizardsArr) {
    wizardsArr.forEach(item => {
      var wizardTemplate = document.querySelector('#similar-wizard-template').content.cloneNode(true);
      wizardTemplate.querySelector('.setup-similar-label').textContent = item.name;
      wizardTemplate.querySelector('.wizard-coat').style.fill = item.colorCoat;
      wizardTemplate.querySelector('.wizard-eyes').style.fill = item.colorEyes;
      fragment.appendChild(wizardTemplate);
    })
    return fragment;
  }

  window.wizards = {
    COAT_COLORS,
    EYES_COLORS,
    FIREBALL_COLORS,
    renderWizards
  };

})();
