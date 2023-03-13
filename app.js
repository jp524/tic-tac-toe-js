const GameBoard = (() => {
  // const board = [undefined, 'X', 'O', undefined, 'O', 'X', undefined, 'O', 'O'];
  const board = Array(9).fill(undefined);

  const filterByMarker = (marker) => {
    const result = [];
    board.forEach((cell, index) => {
      if (cell === marker) {
        result.push(index);
      }
    });
    return result;
  };

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

  return { filterByMarker, displayBoard, placeMarker };
})();

const Player = (name, marker) => ({ name, marker });

const GameController = (() => {
  const board = GameBoard;
  const cells = document.querySelectorAll('.cell');
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [1, 4, 8],
    [2, 4, 6],
  ];

  const playerOne = Player('Player 1', 'X');
  const playerTwo = Player('Player 2', 'O');
  const players = [playerOne, playerTwo];
  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const endOfGame = () => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    cells.forEach((cell) => (cell.disabled = true));
  };

  const displayWMessage = () => {
    const messages = document.querySelector('.messages');
    const message = document.createElement('div');
    message.textContent = `${activePlayer.name} wins!`;
    messages.appendChild(message);
  };

  const checkWinner = () => {
    const playerCells = board.filterByMarker(activePlayer.marker);
    winningCombos.forEach((combo) => {
      if (combo.every((cell) => playerCells.includes(cell))) {
        displayWMessage();
        endOfGame();
      }
    });
  };

  const onCellClick = (event) => {
    if (event.target.value === 'undefined') {
      board.placeMarker(event.target.id, activePlayer.marker);
      checkWinner();
      switchPlayerTurn();
    }
  };

  const startGame = () => {
    cells.forEach((cell) => {
      cell.addEventListener('click', (event) => onCellClick(event));
    });
  };

  board.displayBoard();
  startGame();
})();

// eslint-disable-next-line no-unused-vars
const game = GameController;
