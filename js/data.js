'use strict';

(function () {
  var NUMBER_WIZARDS = 4;
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var fragment = document.createDocumentFragment();
  var wizardsArr = generateObjectsArr(NUMBER_WIZARDS);

  function generateObj() {
    return {
      name: window.utils.getRandomElementArr(NAMES),
      lastName: window.utils.getRandomElementArr(LAST_NAMES),
      coatColor: window.utils.getRandomElementArr(COAT_COLORS),
      eyesColor: window.utils.getRandomElementArr(EYES_COLORS),
    };
  }

  function generateObjectsArr(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
      arr.push(generateObj());
    }
    return arr;
  }

  function renderWizards() {
    for (var i = 0; i < wizardsArr.length; i++) {
      var wizardTemplate = document.querySelector('#similar-wizard-template').content.cloneNode(true);
      wizardTemplate.querySelector('.setup-similar-label').textContent = wizardsArr[i].name + ' ' + wizardsArr[i].lastName;
      wizardTemplate.querySelector('.wizard-coat').style.fill = wizardsArr[i].coatColor;
      wizardTemplate.querySelector('.wizard-eyes').style.fill = wizardsArr[i].eyesColor;
      fragment.appendChild(wizardTemplate);
    }
    return fragment;
  }

  window.data = {
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    renderWizards: renderWizards
  };

})();
