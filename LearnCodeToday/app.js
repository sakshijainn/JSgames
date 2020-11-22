const courses =  [
    {
        name: "Complete React Js Course",
        price: "2.2"
    },
    {
        name: "Complete Angular Course",
        price: "2.1"
    },
    {
        name: "Complete MERN Course",
        price: "1.8"
    },
    {
        name: "Complete C++ Course",
        price: "2.9"
    }

]


//loop through array:
// challenge: grab ul and 
// construct list item and inject  these list items into it

function generateList()
{
    const ul = document.querySelector(".list-group")
    ul.innerHTML =" ";
    courses.forEach(course => 
        {

            //create list item 
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            const name = document.createTextNode(course.name);

            li.appendChild(name);

            const span = document.createElement('span');
            span.classList.add('float-right');

            const price = document.createTextNode("$"+course.price);

            span.appendChild(price);

            li.appendChild(span);

            ul.appendChild(li);

        });
}


// generateList();

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", ()=>{

    courses.sort((a,b)=> a.price - b.price);
    generateList();
});



const button1 = document.querySelector(".hsort-btn");

button1.addEventListener("click", ()=>{

    courses.sort((a,b)=> b.price - a.price);
    generateList();
});