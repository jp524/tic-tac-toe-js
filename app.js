const GameBoard = (() => {
  const board = [undefined, 'X', 'O', undefined, 'O', 'X', undefined, 'O', 'O'];
  // const board = Array(9).fill(undefined);

  const displayBoard = () => {
    board.forEach((element, index) => {
      const cell = document.getElementById(index);
      cell.textContent = element;
      cell.value = element;
    });
  };

  const placeMarker = (cell, marker) => {
    board[cell] = marker;
    displayBoard();
  };

  return { board, displayBoard, placeMarker };
})();

const GameController = (() => {
  const board = GameBoard;

  const onCellClick = (event) => {
    if (event.target.value === 'undefined') {
      board.placeMarker(event.target.id, 'X');
    }
  };

  const playRound = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', (event) => onCellClick(event));
    });
  };

  board.displayBoard();
  playRound();
})();

const game = GameController;
