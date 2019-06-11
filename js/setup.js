'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_WIZARDS = 4;

function generateRandomInt(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min, 10);
}

function getRandomIndexArr(arr) {
  return generateRandomInt(0, arr.length - 1);
}

function gerRandomElementArr(arr) {
  return arr[getRandomIndexArr(arr)];
}

function generateObj() {
  return {
    name: gerRandomElementArr(NAMES),
    lastName: gerRandomElementArr(LAST_NAMES),
    coatColor: gerRandomElementArr(COAT_COLORS),
    eyesColor: gerRandomElementArr(EYES_COLORS),
  };
}

function generateObjectsArr(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(generateObj());
  }
  return arr;
}

function renderWizards() {
  var fragment = document.createDocumentFragment();

  var wizardsArr = generateObjectsArr(NUMBER_WIZARDS);

  for (var i = 0; i < wizardsArr.length; i++) {
    var wizardTemplate = document.querySelector('#similar-wizard-template').content.cloneNode(true);
    wizardTemplate.querySelector('.setup-similar-label').textContent = wizardsArr[i].name + ' ' + wizardsArr[i].lastName;
    wizardTemplate.querySelector('.wizard-coat').style.fill = wizardsArr[i].coatColor;
    wizardTemplate.querySelector('.wizard-eyes').style.fill = wizardsArr[i].eyesColor;
    fragment.appendChild(wizardTemplate);
  }
  return fragment;
}

document.querySelector('.setup-similar-list').appendChild(renderWizards());
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
