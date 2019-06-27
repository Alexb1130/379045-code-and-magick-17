'use strict';

(function () {

  var generateRandomInt = function (min, max) {
    var length = max - min + 1;
    return Math.floor(Math.random() * length + min);
  };

  var getRandomIndexArr = function (arr) {
    return window.utils.generateRandomInt(0, arr.length - 1);
  };

  var getRandomElementArr = function (arr) {
    return arr[getRandomIndexArr(arr)];
  };

  window.utils = {
    generateRandomInt: generateRandomInt,
    getRandomElementArr: getRandomElementArr,
  };

})();
