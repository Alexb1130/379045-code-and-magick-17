'use strict';

var OFFSET = 10;

var cloud = {
  width: 420,
  height: 270,
  x: 100,
  y: 10,
  color: '#fff',
  shadow: 'rgba(0, 0, 0, 0.7)'
};

var font = {
  family: '16px PT Mono',
  offset: 15,
  height: 16,
  lineHeight: 16 + OFFSET,
  color: '#000'
};

var histogram = {
  height: 150,
  colWidth: 40,
  colOffset: 50
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloud.width, cloud.height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloud.x + OFFSET, cloud.y + OFFSET, cloud.shadow);
  renderCloud(ctx, cloud.x, cloud.y, cloud.color);

  ctx.fillStyle = font.color;

  ctx.font = font.family;
  ctx.fillText(
      'Ура вы победили!\n',
      cloud.x + OFFSET,
      cloud.y + OFFSET - font.offset + OFFSET + font.lineHeight
  );
  ctx.fillText(
      'Список результатов:',
      cloud.x + OFFSET,
      cloud.y + OFFSET + font.offset + font.lineHeight
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var MAIN_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
    var OTHER_PLAYERS_COLOR = 'hsl(240, ' + parseInt(Math.random() * 155 + 5, 10) + '%, 50%)';

    ctx.fillStyle = font.color;
    ctx.fillText(
        parseInt(times[i], 10),
        cloud.x + OFFSET + font.offset + (histogram.colWidth + histogram.colOffset) * i,
        cloud.y + (font.lineHeight + histogram.colOffset) + histogram.height - (times[i] * histogram.height) / maxTime
    );
    ctx.fillText(
        names[i],
        cloud.x + OFFSET + font.offset + (histogram.colWidth + histogram.colOffset) * i,
        cloud.y + cloud.height - font.height
    );
    if (names[i] === 'Вы') {
      ctx.fillStyle = MAIN_PLAYER_COLOR;
    } else {
      ctx.fillStyle = OTHER_PLAYERS_COLOR;
    }
    ctx.fillRect(
        cloud.x + (OFFSET * 2.5) + (histogram.colWidth + histogram.colOffset) * i,
        cloud.y + OFFSET + (font.lineHeight + histogram.colOffset) + histogram.height - (times[i] * histogram.height) / maxTime,
        histogram.colWidth,
        (times[i] * histogram.height) / maxTime
    );
  }
};
