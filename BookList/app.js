// Book Constructor

function Book(title,author,isbn)
{
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI Constructor
function UI(){}

//calling that prototype
UI.prototype.addBooktoList = function(book)
{
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
   row.innerHTML=`
   <td> ${book.title} </td>
   <td> ${book.author} </td>
   <td> ${book.isbn} </td>
   <td> <a href="#" class=""delete> X </a> </td>
   
   `


    console.log(row);
   list.appendChild(row);


}

//show alert
UI.prototype.showalert = function(msg,className)
{

    //create div
    const div = document.createElement('div');
    div.className =`alert ${className}`;
    //ADd text
    div.appendChild(document.createTextNode(msg));

    //get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert before form 
    container.insertBefore(div,form);

    //error disappear after 3 sec
    setTimeout(function()
    {
        document.querySelector('.alert').remove()
    },3000);

}

//delete book
UI.prototype.deleteBook = function(target)
{
    if(target.className==='delete')
    {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function()
{
    document.getElementById('title').value=' ';
    document.getElementById('author').value=' ';
    document.getElementById('isbn').value=' ';
}


//event listeners
document.getElementById('book-form').addEventListener('submit',
function(e)
{
    const title =  document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    // console.log('test');
    console.log(title,author,isbn);


    //Instantiate  book 
    const book = new Book(title,author,isbn);
    // console.log(book);

    //Instantiate UI
    const ui = new UI();



    console.log(ui); //gives under __proto__ ...... addBooktoList() function 


    //validate
    if(title==='' || author===''||isbn==='')
    {
       
        //error alert
        ui.showalert('Please fill in all fields' ,'error');

    }

    else
    {
         //Add book to the list:
         ui.addBooktoList(book);

        //clear fields after submitting
        ui.clearFields();

         e.preventDefault();
    }

  
})



//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e)
{
    //target this delet ... using prototype method of UI

    console.log('124');

    const ui = new UI();
    ui.deleteBook(e.target);

    //show alert
   ui.showalert('Book deleted' ,'success');


    e.preventDefault();
})