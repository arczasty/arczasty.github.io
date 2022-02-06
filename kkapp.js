const boxes = Array.from(document.getElementsByClassName('box'));
console.log(boxes);

const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const PLAYER_O = "O";
const PLAYER_X = "X";
let currentPlayer = PLAYER_O;

const spaces = [];



const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += 'border-bottom: 3px solid #3e0249;';
        }
        if (index % 3 == 0) {
            styleString += 'border-right: 3px solid #3e0249;';
        }
        if (index % 3 == 2) {
            styleString += 'border-left: 3px solid #3e0249;';
        }

        if (index > 5) {
            styleString += 'border-top: 3px solid #3e0249;';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
        
    });
};


const boxClicked = (e) => {
    const id = e.target.id;
    console.log(id);

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if (playerHasWon()) 
        {
            playText.innerText = `"${currentPlayer}" zwyciężył!`;
            return;
        }
        currentPlayer = currentPlayer == PLAYER_O ? PLAYER_X : PLAYER_O;
    }

};


const playerHasWon = () => {
    if (spaces[0]  == currentPlayer) {
        if (spaces[1] == currentPlayer && spaces[2] == currentPlayer) {
            console.log(`"${currentPlayer}" wygrywa górny rząd`);
            return true;
        }

        if (spaces[3] == currentPlayer && spaces[6] == currentPlayer) {
            console.log(`"${currentPlayer}" wygrywa lewy rząd`);
            return true;
        }

        if (spaces[4] == currentPlayer && spaces[8] == currentPlayer) {
            console.log(`"${currentPlayer}" wygrywa przekątną`);
            return true;
        }

    } else if (spaces[8]  == currentPlayer) {
        if (spaces[2] == currentPlayer && spaces[5] == currentPlayer) {
            console.log(`"${currentPlayer}" wygrywa prawy rząd`);
            return true;
        }

        if (spaces[3] == currentPlayer && spaces[6] == currentPlayer) {
            console.log(`"${currentPlayer}" wygrywa dolny rząd`);
            return true;
        }
    } else if (spaces[4] == currentPlayer) {
        if (spaces[1] == currentPlayer && spaces[7] == currentPlayer) {
            console.log(`"${currentPlayer}" wygrywa środkowy rząd pionowo`);
            return true;
        }

        if (spaces[3] == currentPlayer && spaces[5] == currentPlayer) {
            console.log(`"${currentPlayer}" wygrywa środkowy rząd poziomo`);
            return true;
        }

        if (spaces[2] == currentPlayer && spaces[6] == currentPlayer) {
            console.log(`"${currentPlayer}" wygrywa przekątną 2,4,6`);
            return true;
        }


    }    
};


const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });

    boxes.forEach(box => {
        box.innerText = '';
    });

    playText.innerText = 'Zagrajmy!';
    currentPlayer = PLAYER_O;
}


restartBtn.addEventListener('click', restart);
restart();
drawBoard();