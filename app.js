const GameBoard = (() => {
  const board = ['X', 'X', 'O', 'X', 'O', 'X', 'O', 'O', 'O'];
  const container = document.querySelector('.container');

  const displayBoard = () => {
    board.forEach((element, index) => {
      const cell = document.createElement('button');
      cell.classList.add('cell');
      cell.id = index;
      cell.textContent = element;
      container.appendChild(cell);
    });
  };

  return { displayBoard };
})();

const game = GameBoard;
game.displayBoard();
