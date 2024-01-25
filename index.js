
// 2. Use getRandomCard() to set the values of firstCard and secondCard
var cards = [] // Arrays - ordered lists of items
var sum = 0
var hasBlackJack = false
var isAlive = false
var messageEl = document.getElementById("message-el")
var sumEl = document.querySelector("#sum-el")
var cardsEl = document.querySelector("#cards-el")
var player = {
    name: "Player",
    chips: 145
}


var playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out
// Create a new function called startGame() that calls renderGame()

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    var randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function startGame() {
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    isAlive = true
    var firstCard = getRandomCard()
    var secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a new card?"
   
} else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack! "
    hasBlackJack = true
    
} else {
    messageEl.textContent = "You're out of the game!"
    isAlive = false
    
}
sumEl.textContent = ("Sum : " + sum) 
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " 
    // Create a for loop that renders out all the cards instead of just two
    for (i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
    // render out ALL the cards we have
}
function newCard() {
    // Only allow the player to get a new card if she IS alive
    // and does NOT have Blackjack
    if ( isAlive === true && hasBlackJack === false )
    {    
    // 1. Create a card variable, and hard code its value to a number (2-11)
    var card = getRandomCard()
    // 2. Add the new card to the sum variable
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    // 3. Call startGame()
    renderGame()
    }
}

// 2. Create a function newCard() that logs out 
//"Drawing a new card from the deck!"
// 3. Log it out!


/*
***
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

var age = 21

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
if (age < 21) {
    console.log("You can not enter the club!")
}
else {
    console.log ("Welcome!")
}
***

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
var messageEl = document.getElementById("message")
var age = 105


if (age<100) {
    messageEl.textContent = "Not elegible"
}
else if (age === 100) {
    messageEl.textContent = "Happy Birthday!"
}
else {
    messageEl.textContent = "Not elegible, you have already gotten one"
}


console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false

// Arrays - ordered lists of items

var featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

var myProfile = [
    "Six years of experience",
    "Electrical power engineering",
    "Bachaelor of electrical engineering",
    "EGFW web development scholarship - challenger level"
]

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

var basicInfo = [
    "Kareem Ahmed Khedr", 
    34,
    true
]
console.log( basicInfo )

var messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

var newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)
messages.pop(newMessage)
console.log(messages)

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
for (i = 10; i<101; i += 10) {
    console.log(i);
}


var cards = [7, 3, 9, 11]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
for (i = 0; i < cards.length; i += 1) {
    console.log (cards[i])
}

var sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
var greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
    console.log(greetingEl.textContent)
}
*/
