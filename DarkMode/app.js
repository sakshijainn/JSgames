let darkMode = localStorage.getItem('darkMode'); 

const toggle = document.querySelector('#toggle');

//Get the circle
var circle = document.getElementById('circle');


const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');

    circle.style.marginLeft = "100px";
  }



  const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('darkmode');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);

    circle.style.marginLeft = "1px";
  }


  // If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
  }

  //When someone clicks the button
toggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});









let btn1 = document.getElementById('quo');
let output = document.getElementById('output');
let quote =[
    'Love For All, Hatred For None',
    'Change the world by being yourself',
    'Every moment is a fresh beginning. ',
    'Never regret anything that made you smile. ',
    'Die with memories, not dreams.',
    'Aspire to inspire before we expire.',
    'Everything you can imagine is real.',
    'Simplicity is the ultimate sophistication. ',
    'Whatever you do, do it well. ',
    'What we think, we become. ' 
]



btn1.addEventListener('click',function()
{
   
    var randomQuote =  quote[Math.floor(Math.random()*quote.length)];
    console.log(randomQuote);
    output.innerHTML = randomQuote;
});











// var toggled= false;

// var htag = document.getElementById('title');

// //Get the circle
// var circle = document.getElementById('circle');

// //get the body
// var bodyTag = document.querySelector('body');

// document.getElementById('toggle').onclick = function()
// {
//     if(!toggled)
//     {
//         htag.classList.add('color-white');
//         bodyTag.classList.add('bck-color-black');
//         circle.style.marginLeft = "100px";
//         toggled= false;
//     }

//     else
//     {
//         htag.classList.remove('color-white');
//         bodyTag.classList.remove('bck-color-black');
//         circle.style.marginLeft = "1px";
//         toggled= true;
//     }
// }


