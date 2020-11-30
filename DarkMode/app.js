// var toggled = false;

// var htag = document.getElementsByTagName("h1")[0];

// var bodytag = document.getElementsByTagName('body')[0];

// var circle = document.getElementById("circle");

// document.getElementById('toggle').onclick= function()
// {
//   if(!toggled)
//   {
//     htag.classList.add('color-white');
//     bodytag.classList.add('color-black');
//     circle.style.marginLeft= "100px";
//     toggled=true;
//   }

//   else{
//     htag.classList.remove('color-white');
//     bodytag.classList.remove('color-black');
//     circle.style.marginLeft= "1px";
//     toggled=false;
//   }
// }

const chk = document.getElementById('chk');
const htag = document.getElementsByTagName("h1");
chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  htag.classList.add('color-white');
});


