'use strict';

var cloudProps = {
  x: 100,
  y: 10,
  width: 420,
  height: 270,
  color: '#fff',
  shadow: 'rgba(0, 0, 0, 0.7)',
  shadowOffset: 10
};

// var stringArr = ['Ура вы победили!\n', 'Список результатов:'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudProps.width, cloudProps.height);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudProps.x + cloudProps.shadowOffset, cloudProps.y + cloudProps.shadowOffset, cloudProps.shadow);
  renderCloud(ctx, cloudProps.x, cloudProps.y, cloudProps.color);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!\n', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

};
