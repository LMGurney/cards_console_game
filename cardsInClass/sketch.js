//using lex.page as my code hinting

// Array of playing card suits
let suits = ['♠', '♣', '♥', '♦'];

// Array of playing card face values
let faceValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Empty array for deck of cards (constant)
const deck = [];

console.log(faceValues);
console.log(suits);

/* for (let suit of suits) {
    for (let value of faceValues) {
      deck.push(value + suit);
    } 
  }*/

  for (let i=0; i< suits.length; i++) {
    for (let j=0; j<faceValues.length; j++ ) {
        deck.push(faceValues[j] + suits[i]);
    }
  }
  console.log(deck);
  console.log(deck[3]);

  function compareCards(card1, card2){
    let value1= card1.substring(0, card1.length-1) //4h qh
    if(value1 === 'Q' || value1 === 'K' || value1 === 'J'){
            value1=10;
    }

    let value2 = card2.substring(0, card2.length-1) //4h qh
    if(value2 === 'Q' || value2 === 'K' || value2 === 'J'){
       value2=10;
    }

    if(value1 === "A"){
        value1 = 1;
    } 
    if (value2 === "A"){
      value2 = 1;
    }

     if(value1 > value2){
        console.log(card1, " is greater than ", card2);
     }else  if(value1 < value2){
      console.log(card1, " is less than ", card2);
   } else  if(value1 === value2){
    console.log(card1, " it's a tie ", card2);
  } else{
    console.log("There was a problem");

  }

  }




  compareCards(deck[0], deck[13]);
  
  function generateRandomCard(){
    const randomIndex = Math.floor(Math.random());
    console.log( randomIndex);

  }
  generateRandomCard();

