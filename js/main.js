let boxs = ['', '', '', '', '', '', '', '', '']
let playerX = 'X';
let playerO = 'O';
let counter = 1;
const play = function (event) {
    sound();
    // if the counter odd the player is X if even O
    if (counter % 2 === 1) {
        //take the position from the id
        const position = $(event.target).attr('id')
        boxs[position] = playerX
        $(event.target).text(playerX);
        console.log('Player X played');
    } else {
        const position = $(event.target).attr('id')
        boxs[position] = playerO
        $(event.target).text(playerO);
        console.log('Player O played');
    }
    console.log(counter);
    counter++
    $(event.target).off('click');
    turn();
    checkWinner();
}
$('.box').on('click', play);

const turn = function () {
    if (counter % 2 === 1) {
        $('.turn').text('Player X turn')
    } else {
        $('.turn').text('Player O turn')
    }
    if (counter > 9) {
        $('.turn').text('Tie')
    }
}

const checkWinner = function () {
    let isWin = [false, ""];
    if (counter > 5) {
        if (boxs[0] === boxs[1] && boxs[1] === boxs[2] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins')
            console.log('Player ' + boxs[0] + ' Wins')
            isWin[0] = true;
            isWin[1] = boxs[0];
            $('.box').off('click')
        } else if (boxs[3] === boxs[4] && boxs[4] === boxs[5] && boxs[3] !== "") {
            $('.turn').text('Player ' + boxs[3] + ' Wins')
            console.log('Player ' + boxs[3] + ' Wins')
            isWin[0] = true;
            isWin[1] = boxs[3];
            $('.box').off('click')
        } else if (boxs[6] === boxs[7] && boxs[7] === boxs[8] && boxs[6] !== "") {
            $('.turn').text('Player ' + boxs[6] + ' Wins')
            console.log('Player ' + boxs[6] + ' Wins')
            isWin[0] = true;
            isWin[1] = boxs[6];
            $('.box').off('click')
        } else if (boxs[0] === boxs[3] && boxs[3] === boxs[6] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins')
            console.log('Player ' + boxs[0] + ' Wins')
            isWin[0] = true;
            isWin[1] = boxs[0];
            $('.box').off('click')
        } else if (boxs[1] === boxs[4] && boxs[4] === boxs[7] && boxs[1] !== "") {
            $('.turn').text('Player ' + boxs[1] + ' Wins')
            console.log('Player ' + boxs[1] + ' Wins')
            isWin[0] = true;
            isWin[1] = boxs[1];
            $('.box').off('click')
        } else if (boxs[2] === boxs[5] && boxs[5] === boxs[8] && boxs[2] !== "") {
            $('.turn').text('Player ' + boxs[2] + ' Wins')
            console.log('Player ' + boxs[2] + ' Wins')
            isWin[0] = true;
            isWin[1] = boxs[2];
            $('.box').off('click')
        } else if (boxs[0] === boxs[4] && boxs[4] === boxs[8] && boxs[0] !== "") {
            $('.turn').text('Player ' + boxs[0] + ' Wins')
            console.log('Player ' + boxs[0] + ' Wins')
            isWin[0] = true;
            isWin[1] = boxs[0];
            $('.box').off('click')
        } else if (boxs[2] === boxs[4] && boxs[4] === boxs[6] && boxs[2] !== "") {
            $('.turn').text('Player ' + boxs[2] + ' Wins')
            console.log('Player ' + boxs[2] + ' Wins')
            isWin[0] = true;
            isWin[1] = boxs[2];
            $('.box').off('click')
        }
    }

    if (isWin[0]) {
        swal({
            title: "Good job! ",
            text: "Player " + isWin[1] + " Wins!",
            icon: "success",
            button: "Close",
        });
    }

    if (counter > 9) {
        $('.turn').text('Tie')
        swal({
            title: "Oops! ",
            text: "Tie",
            icon: "warning",
            button: "Close",
        });
        console.log("Tie")
    }
}

const reset = function () {
    boxs = ['', '', '', '', '', '', '', '', ''];
    counter = 1;
    $('.box').text('');
    $('.box').on('click', play);
    $('.turn').text('Player X turn')
    console.log('Reset to new game')
}
$('.button').on('click', reset);

const sound = function () {
    $('audio')[0].play();
}
