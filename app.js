const GameBoard = (() => {
  // const board = [undefined, 'X', 'O', undefined, 'O', 'X', undefined, 'O', 'O'];
  const board = Array(9).fill(undefined);

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

const Player = (name, marker) => ({ name, marker });

const GameController = (() => {
  const board = GameBoard;

  const playerOne = Player('Player 1', 'X');
  const playerTwo = Player('Player 2', 'O');
  const players = [playerOne, playerTwo];
  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const onCellClick = (event) => {
    if (event.target.value === 'undefined') {
      board.placeMarker(event.target.id, activePlayer.marker);
      switchPlayerTurn();
    }
  };

  const startGame = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', (event) => onCellClick(event));
    });
  };

  board.displayBoard();
  startGame();
})();

const game = GameController;
