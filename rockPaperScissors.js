
const randomNum0To2 = () => Math.floor(Math.random() * 3);

const randomRockPaperScissors = () => {
    let move;
    switch (randomNum0To2()) {
        case 0:
            move = 'rock';
            break;
        case 1:
            move = 'paper';
            break;
        case 2:
            move = 'scissors';
            break;
        default:
            move = 'invalid move';
            break;
    };
    return move;
};

const whoWon = (player1Move, player2Move) => {
    let result;
    if (player1Move === player2Move) result = 'No one! It\'s a tie';
    else if (player1Move === 'paper' && player2Move === 'rock') result = 'player1';
    else if (player1Move === 'rock' && player2Move === 'paper') result = 'player2';
    else if (player1Move === 'rock' && player2Move === 'scissors') result = 'player1';
    else if (player1Move === 'scissors' && player2Move === 'rock') result = 'player2';
    else if (player1Move === 'scissors' && player2Move === 'paper') result = 'player1';
    else if (player1Move === 'paper' && player2Move === 'scissors') result = 'player2';
    else result = 'invalid moves';
    return result;
}

const main = () => {
    const player1Move = randomRockPaperScissors();
    const player2Move = randomRockPaperScissors();
    console.log('Rock! Paper! Scissors!');
    console.log(`Player1: ${player1Move}`);
    console.log(`Player2: ${player2Move}`);
    console.log(`And the winner is: ${whoWon(player1Move, player2Move)}!`);
};

main();
