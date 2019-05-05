let boxs = ['', '', '', '', '', '', '', '', '']
let playerX = 'X';
let playerO = 'O';
let counter = 1;
const play = function (event) {
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
    checkWinner();
    turn();
}
$('.box').on('click', play);


const checkWinner = function () {
    if (counter > 5) {
        if (boxs[0] === boxs[1] && boxs[1] === boxs[2] && boxs[0] !== "") {
            console.log(boxs[0] + ' Win')
            $('.box').off('click')
        } else if (boxs[3] === boxs[4] && boxs[4] === boxs[5] && boxs[3] !== "") {
            console.log(boxs[3] + ' Win')
            $('.box').off('click')
        } else if (boxs[6] === boxs[7] && boxs[7] === boxs[8] && boxs[6] !== "") {
            console.log(boxs[6] + ' Win')
            $('.box').off('click')
        } else if (boxs[0] === boxs[3] && boxs[3] === boxs[6] && boxs[0] !== "") {
            console.log(boxs[0] + ' Win')
            $('.box').off('click')
        } else if (boxs[1] === boxs[4] && boxs[4] === boxs[7] && boxs[1] !== "") {
            console.log(boxs[1] + ' Win')
            $('.box').off('click')
        } else if (boxs[2] === boxs[5] && boxs[5] === boxs[8] && boxs[2] !== "") {
            console.log(boxs[2] + ' Win')
            $('.box').off('click')
        } else if (boxs[0] === boxs[4] && boxs[4] === boxs[8] && boxs[0] !== "") {
            console.log(boxs[0] + ' Win')
            $('.box').off('click')
        } else if (boxs[2] === boxs[4] && boxs[4] === boxs[6] && boxs[2] !== "") {
            console.log(boxs[2] + ' Win')
            $('.box').off('click')
        }
    }

    if (counter > 9) {
        console.log("Tie")
    }
}
const turn = function () {
    if (counter % 2 === 1) {
        $('p').text('Player X turn')
    } else {
        $('p').text('Player O turn')
    }
}