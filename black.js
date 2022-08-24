 
let player = {
    name: "per",
    chips: 145 
}
 
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("message-el")
player.textContent = player.name + ': $' + player.chips




function getRandomCard() {
    let randomNumer =  Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    }
    else if( randomNumer === 1) {
     return 11 
    }
    else {
        return randomNumer
    }
}


function startGame(){
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard


    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
   for(let i= 0; i <cards.length; i++){  
    cardsEl.textContent += cards[i] + " "
   }
   
    sumEl.textContent = "sum:" + sum
    
    if(sum < 21){
        message = "Do you want to draw another card?"
    }
    
     else if ( sum === 21){
        message = "you have black jack"
        hasBlackJack = true
    }
    
    else{
        message = "you are out of the game!"
        isAlive = false 
    } 

messageEl.textContent = message
}


function newCard(){
    if(isAlive === true && hasBlackJack === false) {
    
    let  card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
   
     }

}

