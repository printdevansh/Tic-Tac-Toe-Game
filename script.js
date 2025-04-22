let currPlayer = "X";
let arr = Array(9).fill(null);
let gameOver = false;

function checkWinner() {
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            document.getElementById('status').innerText = `Winner is ${arr[a]}!`;
            gameOver = true;
            return;
        }
    }

    if (!arr.includes(null)) {
        document.getElementById('status').innerText = 'Draw!';
        gameOver = true;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null || gameOver) return;

    arr[id] = currPlayer;
    el.innerText = currPlayer;

    checkWinner();

    if (!gameOver) {
        currPlayer = currPlayer === "X" ? "O" : "X";
        document.getElementById('status').innerText = `Current Player: ${currPlayer}`;
    }
}

function resetGame() {
    arr = Array(9).fill(null);
    currPlayer = "X";
    gameOver = false;
    document.querySelectorAll('.col').forEach(cell => {
        cell.innerText = '';
    });
    document.getElementById('status').innerText = 'Current Player: X';
}
