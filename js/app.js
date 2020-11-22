const firstButton = document.getElementById('one');

firstButton.addEventListener('click', displayOne);



function displayOne(e)
{
    console.log("First Game Clicked");
    e.preventDefault();
}