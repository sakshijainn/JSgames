// const cards = document.querySelectorAll(".card");
// console.log(cards);

// //variables
// var isFlipped = false;
// var firstCard;
// var secondCard;

// cards.forEach((card) => card.addEventListener("click", flip));


//variables
var isFlipped = false;
var firstCard ;  //you can just declare them only . 
var secondCard;

const cards = document.querySelectorAll(".card")
//so the console of cards will give NodeList(16)...16 card images!
//Here List is kind of alternarive word for array, nothing more than array and we can loop through that.

//so we want to flip this cards when they get flipped:
cards.forEach((card)=>card.addEventListener('click',flip))




function flip()
{
  //But we want to actually flip!!!!
  // console.log('Card Flipped');
  // console.log(this);//this is holding that particular card
  this.classList.add("flip"); // flip class is written in css
  //but you dont want to flip all.. keep track of flipped cards
  if(!isFlipped)
  {
    isFlipped= true;
    //keep track of first card
    firstCard = this;
  }
  else{
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }


}

function checkIt()
{
    // console.log('Checking It');
    if(firstCard.dataset.image=== secondCard.dataset.image)
    {
      success();
    }
    else
    {
      fail();
    }
}


function success()
{
  //console.log('Success');
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
   reset();
}


function fail()
{

  // console.log('Faill');
  setTimeout(() => {
         firstCard.classList.remove("flip");
         secondCard.classList.remove("flip");
           reset();
     }, 1000);

}

function reset()
{

  isFlipped = false;
   firstCard = null;
   secondCard = null;

}


//as soon as script runs , this function calls itself :
(function shuffle()
{

  cards.forEach((card)=>{
    //for every single card we need a position 
    var index= Math.floor(Math.random()*16);
    //use a flexbox property:order
    card.style.order=index;
  });

})();






// function checkIt() {
//   //   console.log("Checking...");
//   if (firstCard.dataset.image === secondCard.dataset.image) {
//     success();
//   } else {
//     fail();
//   }
// }

// function success() {
//   //   console.log("Success");
//   firstCard.removeEventListener("click", flip);
//   secondCard.removeEventListener("click", flip);
//   reset();
// }

// function fail() {
//   //   console.log("Failed");
//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");
//     reset();
//   }, 1000);
// }

// function reset() {
//   isFlipped = false;
//   firstCard = null;
//   secondCard = null;
// }

// //TODO: shuffle

// (function shuffle() {
//   cards.forEach((card) => {
//     var index = Math.floor(Math.random() * 16);
//     card.style.order = index;
//   });
// })();


// Todo
//convert all functions into arrow ones 
//optimise var declartion
//destructuring of null
//windows.load() on shuffle()



// flip = function()
// {
//       console.log("Card flipped");
//      // console.log(this);
//       this.classList.add("flip");
//       if (!isFlipped) {
//         isFlipped = true;
//         firstCard = this;
//           }
//        else {
//     secondCard = this;
//     console.log(firstCard);
//     console.log(secondCard);

//     checkIt();
//         }
// }


