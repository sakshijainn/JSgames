





    
//

// // Remove Task
// function removeTask(e) {
//     if(e.target.parentElement.classList.contains('delete-item')) {
//       if(confirm('Are You Sure?')) {
//         console.log(e.target);
//         e.target.parentElement.parentElement.remove();
//       }
//     }
//   }


// // function removeTask(e)
// // {

// //     //when you do e.target it gives i class,, so go to its parent that is the li and check for cros class as well
// //     //so now after if condition when we click cross button we want to remove the whole li .. means parent of the parent 
// //     //i ka parent a.. a ka parent li 
// //     if(e.target.parentElement.classList.contains('delete-item'))
// //     {
// //         console.log(e.target);
// //          e.target.parentElement.parentElement.remove();
// //     }
// // }





// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task")
const taskList = document.querySelector(".collection")
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks")

// Load all event listeners
loadEventListeners();

function loadEventListeners()
{
    //DOM LOad Event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task event..take form variable and add listener
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//get tasks from LS
function getTasks()
{
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
    tasks=[]
  }
  else
  {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task)
  {
    //create dom element 
        // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Append the link to li
      li.appendChild(link);
      // Append li to ul
      taskList.appendChild(li);
})}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);
 //STORAGE in ls
  storeTaskInLocalStorage(taskInput.value);
  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

function storeTaskInLocalStorage(task)
{
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
    tasks= [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  //send back to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}







// Remove Task
function removeTask(e) {
 

    if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are You Sure?')) {
        console.log(e.target);
        e.target.parentElement.parentElement.remove();

        //Remove ftom LS
        removeTaskFromLocalStorage( e.target.parentElement.parentElement);
      }
    }
  }


function removeTaskFromLocalStorage(taskItem)
{
  console.log(taskItem);
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
    tasks=[]
  }

  else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task,index)
  {
    if(taskItem.textContent===task)
    {
      tasks.splice(index,1);
    }
  })

  //set local storage again
  localStorage.setItem('tasks', JSON.stringify(tasks));

}



function clearTasks()
{
  taskList.innerHTML = '';

                                                            // Faster
                                                            // while(taskList.firstChild) {
                                                            //   taskList.removeChild(taskList.firstChild);
                                                            // }

                                                            // https://jsperf.com/innerhtml-vs-removechild
  //clear from LS
  clearTasksFromLocalStorage();
}


function clearTasksFromLocalStorage()
{
  localStorage.clear();
}


function filterTasks(e)
{
  //get whatever s being typed in here search bar
  const text = e.target.value.toLowerCase();
  console.log(text);
  //take all list items 
  //using foreach because query selector returns nodoe list
  document.querySelectorAll('.collection-item').forEach(function(task)
  {
     const item  = task.firstChild.textContent;
     if(item.toLowerCase().indexOf(text)!=-1) //no match = -1
     {
        task.style.display = 'block';
     }
     else{
      task.style.display = 'none';
     }

  });
  
}

// const info = document.getElementById('info');

// info.addEventListener('click', showInformation);



// function showInformation(e)
// {
//   //create element 
//   const a = document.createElement('a');
//   a.className= "display-4";
//   a.appendChild(document.createTextNode('https://www.google.com/'));

// info.appendChild(a);
//   e.preventDefault();
// }