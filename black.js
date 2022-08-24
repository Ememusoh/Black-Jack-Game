 

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard + 3
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1

}



function startGame(){
    renderGame()
}

function renderGame() {

   for(let i= 0; i <cards.length; i++){  
    cardEl.textContent += cards[i] + " "
   }
    sumEl.textContent = "sum:" + sum
    
    if(sum < 21){
        message = "Do you want to draw another card"
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
   let  card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()

}

