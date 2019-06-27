'use strict';

(function () {
  var artifactsItem = document.querySelector('.setup-artifacts-cell img');

  document.addEventListener('dragstart', function (evt) {
    evt.dataTransfer.setData('text/html', 'dragstart'); // for firefox
  });

  document.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  document.addEventListener('drop', function (evt) {
    var setupArtifacts = evt.target.parentNode.classList.contains('setup-artifacts');
    var artifactsCell = evt.target.classList.contains('setup-artifacts-cell');

    if (setupArtifacts) {
      if (artifactsCell && !artifactsCell.children) {
        evt.preventDefault();
        evt.target.appendChild(artifactsItem);
      }
    } else {
      evt.preventDefault();
    }
  });

})();
