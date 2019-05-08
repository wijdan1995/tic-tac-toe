//to store the moves in an array
let boxs = ['', '', '', '', '', '', '', '', ''];
let playerX = 'X';
let playerO = 'O';
let counter = 1;
let scoreX = 0;
let scoreO = 0;
let scoreT = 0;
let isWin = [false, ""];

const play = function (event) {
    //play the sound with every click
    clickSound();
    // if the counter odd the player is X if even O
    if (counter % 2 === 1) {
        //take the position from the id
        const position = $(event.target).attr('id');
        boxs[position] = playerX
        //change the text in the box with the player symbol
        $(event.target).text(playerX);
        console.log('Player X played');
    } else {
        const position = $(event.target).attr('id');
        boxs[position] = playerO
        $(event.target).text(playerO);
        console.log('Player O played');
    }
    console.log(counter);
    // add 1 to the counter
    counter++
    //prevent choose the same spot twice
    $(event.target).off('click');
    //check the counter
    turn();
    //check the winner
    checkWinner();
}
$('.box').on('click', play);

//to choose the player the odd nums for X and even nums for O
const turn = function () {
    if (counter % 2 === 1) {
        $('.turn').text('Player X turn');
    } else {
        $('.turn').text('Player O turn');
    }
}

const checkWinner = function () {
    //5 is min num of moves to get win
    if (counter > 5) {
        //there are 8 possibilities to win 
        if (boxs[0] === boxs[1] && boxs[1] === boxs[2] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins');
            console.log('Player ' + boxs[0] + ' Wins');
            //if there is a match
            isWin[0] = true;
            //store the winner
            isWin[1] = boxs[0];
            $('.box').off('click');
        } else if (boxs[3] === boxs[4] && boxs[4] === boxs[5] && boxs[3] !== "") {
            $('.turn').text('Player ' + boxs[3] + ' Wins');
            console.log('Player ' + boxs[3] + ' Wins');
            isWin[0] = true;
            isWin[1] = boxs[3];
            $('.box').off('click');
        } else if (boxs[6] === boxs[7] && boxs[7] === boxs[8] && boxs[6] !== "") {
            $('.turn').text('Player ' + boxs[6] + ' Wins');
            console.log('Player ' + boxs[6] + ' Wins');
            isWin[0] = true;
            isWin[1] = boxs[6];
            $('.box').off('click');
        } else if (boxs[0] === boxs[3] && boxs[3] === boxs[6] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins');
            console.log('Player ' + boxs[0] + ' Wins');
            isWin[0] = true;
            isWin[1] = boxs[0];
            $('.box').off('click');
        } else if (boxs[1] === boxs[4] && boxs[4] === boxs[7] && boxs[1] !== "") {
            $('.turn').text('Player ' + boxs[1] + ' Wins');
            console.log('Player ' + boxs[1] + ' Wins');
            isWin[0] = true;
            isWin[1] = boxs[1];
            $('.box').off('click');
        } else if (boxs[2] === boxs[5] && boxs[5] === boxs[8] && boxs[2] !== "") {
            $('.turn').text('Player ' + boxs[2] + ' Wins');
            console.log('Player ' + boxs[2] + ' Wins');
            isWin[0] = true;
            isWin[1] = boxs[2];
            $('.box').off('click');
        } else if (boxs[0] === boxs[4] && boxs[4] === boxs[8] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins');
            console.log('Player ' + boxs[0] + ' Wins');
            isWin[0] = true;
            isWin[1] = boxs[0];
            $('.box').off('click');
        } else if (boxs[2] === boxs[4] && boxs[4] === boxs[6] && boxs[2] !== "") {
            $('.turn').text('Player ' + boxs[2] + ' Wins');
            console.log('Player ' + boxs[2] + ' Wins');
            isWin[0] = true;
            isWin[1] = boxs[2];
            $('.box').off('click');
        }
    }
    //alert if there is a winner or tie
    if (isWin[0]) {
        //win sound
        winSound();
        //sweet alert code
        swal({
            title: "Good job! ",
            text: "Player " + isWin[1] + " Wins!",
            icon: "success",
            button: "Close",
        });
        //if all the boxs are full there and none of the condition above happend will be a tie 
    } else if (counter > 9) {
        $('.turn').text('Tie');
        $('.t').text(++scoreT)
        swal({
            title: "Oops! ",
            text: "Tie",
            icon: "warning",
            button: "Close",
        });
        tieSound();
        console.log("Tie");
    }
    //update the score
    scores();
}

const reset = function () {
    // reset all the stored info to its original state
    clickSound();
    boxs = ['', '', '', '', '', '', '', '', ''];
    counter = 1;
    $('.box').text('');
    $('.box').off('click');
    $('.box').on('click', play);
    $('.turn').text('Player X turn');
    isWin = [false, ""];
    console.log('Reset to new game');
}
$('.button').on('click', reset);

//sound effects
const clickSound = function () {
    $('.click')[0].play();
}
const winSound = function () {
    $('.win')[0].play();
}
const tieSound = function () {
    $('.tie')[0].play();
}

// get the score and add 1 every time someone wins or tie
const scores = function () {
    if (isWin[1] === playerX) {
        $('.x').text(++scoreX)
        console.log('playerX +1')
    } else if (isWin[1] === playerO) {

        $('.o').text(++scoreO)
        console.log('playerO +1')
    }
}