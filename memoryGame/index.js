//variables
var isFlipped = false;
var firstCard; //you can just declare them only .
var secondCard;
var textscore = 0;

const cards = document.querySelectorAll(".card");
//so the console of cards will give NodeList(16)...16 card images!
//Here List is kind of alternarive word for array, nothing more than array and we can loop through that.

//so we want to flip this cards when they get flipped:
cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //But we want to actually flip!!!!
  // console.log('Card Flipped');
  // console.log(this);//this is holding that particular card
  this.classList.add("flip"); // flip class is written in css
  //but you dont want to flip all.. keep track of flipped cards
  // if(!isFlipped)
  // {
  //   isFlipped= true;
  //   //keep track of first card
  //   firstCard = this;
  // }
  // else{
  //   secondCard = this;
  //   console.log(firstCard);
  //   console.log(secondCard);
  //   // checkIt();
  // }
}

// function checkIt()
// {
//     // console.log('Checking It');
//     if(firstCard.dataset.image=== secondCard.dataset.image)
//     {
//       textscore+=20;
//       ans=textscore;
//       document.getElementById("demo").innerHTML ="You win"
//       document.getElementById("btn2").innerHTML =textscore;
//       firstCard.removeEventListener("click", flip);
//        secondCard.removeEventListener("click", flip);

//     }
//     else
//     {
//       document.getElementById("demo").innerHTML ="You loose"
//       fail();
//     }
// }

// function fail()
// {

//   // console.log('Faill');
//   setTimeout(() => {
//          firstCard.classList.remove("flip");
//          secondCard.classList.remove("flip");
//            reset();
//      }, 1000);

// }

// function reset()
// {

//   isFlipped = false;
//    firstCard = null;
//    secondCard = null;
//    textscore=0;

// }

// //as soon as script runs , this function calls itself :
// (function shuffle()
// {

//   cards.forEach((card)=>{
//     //for every single card we need a position
//     var index= Math.floor(Math.random()*16);
//     //use a flexbox property:order
//     card.style.order=index;
//   });

// })();
