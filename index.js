
window.onload = () => {
    let cardSuit = generateRandomSuit();
    let cardNumber = generateRandomNumber();
    let cardColor = generateRandomColor();
    document.querySelector(".number").innerHTML = cardNumber;
    document.querySelector(".top-suit").innerHTML = cardSuit;
    document.querySelector(".bottom-suit").innerHTML = cardSuit;
    document.querySelector(".card").style.color = cardColor;    
}

function generateRandomNumber() {
    let numbers = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'J'];   
    let color = ['red', 'black'];
    let indexNumbers = Math.floor(Math.random() * Math.floor(numbers.length));
    return (numbers[indexNumbers]);
}

function generateRandomSuit() {
    let suits = ["&spades;", '&hearts;', '&clubs;', '&diams;'];
    let indexSuits = Math.floor(Math.random() * Math.floor(suits.length));
    return (suits[indexSuits]);
}

function generateRandomColor() {
    let colors = ['red', 'black'];
    let indexColor = Math.floor(Math.random() * Math.floor(colors.length));
    return (colors[indexColor]);
}