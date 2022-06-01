document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    playerTurn = playerTurn == 0 ? 1 : 2;

    setTimeout(() => {
      alert("O Jogo acabou - O vencedor foi o jogador " + playerTurn + "!");
    }, 10);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class = '${symbol}'></div>`;
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = "";
    }
  });

  board = ["", "", "", "", "", "", "", "", ""];
  playerTurn = 0;
  gameOver = false;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", updateSquares());
