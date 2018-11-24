document.body.onload = function() {
  var board = new Board('Learning WebDev');
  board.render();
  document.getElementById('main')
    .appendChild(board.node);
}