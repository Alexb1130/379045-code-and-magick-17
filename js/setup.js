'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var setupForm = document.querySelector('.setup-wizard-form');
var setupWizard = document.querySelector('.setup-player');

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

function openPopup() {
  setup.classList.remove('hidden');
}

function closePopup() {
  setup.classList.add('hidden');
}

function popupKeyDownHandler(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
  if (
    (evt.keyCode === ESC_KEYCODE &&
    document.activeElement !== userName)
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
    setupForm.elements['coat-color'].value = gerRandomElementArr(COAT_COLORS);
    evt.target.style.fill = setupForm.elements['coat-color'].value;
  }
  if (evt.target === wizardEyes) {
    setupForm.elements['eyes-color'].value = gerRandomElementArr(EYES_COLORS);
    evt.target.style.fill = setupForm.elements['eyes-color'].value;
  }
  if (evt.target === setupFireball) {
    setupForm.elements['fireball-color'].value = gerRandomElementArr(FIREBALL_COLORS);
    evt.target.parentNode.style.background = setupForm.elements['fireball-color'].value;
  }
}

setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);
document.addEventListener('keydown', popupKeyDownHandler);

userName.addEventListener('invalid', validateFormField);
setupWizard.addEventListener('click', customizeWizard);

document.querySelector('.setup-similar-list').appendChild(renderWizards());
document.querySelector('.setup-similar').classList.remove('hidden');
