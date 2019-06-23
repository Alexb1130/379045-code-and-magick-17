'use strict';

var dialogHandler = document.querySelector('.upload');
var dialog = document.querySelector('.setup');

dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  function mousemoveHandler(moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    dialog.style.top = dialog.offsetTop - shift.y + 'px';
    dialog.style.left = dialog.offsetLeft - shift.x + 'px';
  }

  function mouseupHandler(upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', mousemoveHandler);
    document.removeEventListener('mouseup', mouseupHandler);

    function clickPreventDefaultHandler(clickEvt) {
      clickEvt.preventDefault();
      dialogHandler.removeEventListener('click', clickPreventDefaultHandler);
    }

    if (dragged) {
      dialogHandler.addEventListener('click', clickPreventDefaultHandler);
    }
  }

  document.addEventListener('mousemove', mousemoveHandler);
  document.addEventListener('mouseup', mouseupHandler);

});
