const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;
var textscore=0;
var ans=0;
cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    textscore+=20;
    ans=textscore;
    document.getElementById("demo").innerHTML ="You win"
    document.getElementById("btn2").innerHTML =textscore+" "+"points";
    success();
   
    
  } else {
    document.getElementById("demo").innerHTML ="Better Try Next Time!"
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  console.log("Card flipped");
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function redirect()
{
    textscore=ans;
    checkIt();
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
