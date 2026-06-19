let currentFilter = "all";

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



function displayTasks(){


let list=document.getElementById("taskList");


list.innerHTML="";

let count=document.getElementById("taskCount");

count.innerHTML =
"Tasks: " + tasks.length;

tasks.filter((task)=>{


if(currentFilter=="completed")

return task.completed;


if(currentFilter=="pending")

return !task.completed;


return true;


}).forEach((task,index)=>{


let li=document.createElement("li");



li.innerHTML=`

<span onclick="completeTask(${index})"
class="${task.completed ? 'completed':''}">

${task.text}

</span>


<button onclick="deleteTask(${index})">

Delete

</button>

`;



list.appendChild(li);


});


}





function addTask(){


let input=document.getElementById("taskInput");


if(input.value==="")
return;



tasks.push({

text:input.value,

completed:false

});


saveTasks();


input.value="";


}




function deleteTask(index){


tasks.splice(index,1);


saveTasks();


}




function completeTask(index){


tasks[index].completed =
!tasks[index].completed;


saveTasks();


}





function saveTasks(){


localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);


displayTasks();


}



displayTasks();

function toggleDarkMode(){

document.body.classList.toggle("dark");

}
function showAll(){

currentFilter="all";

displayTasks();

}



function showPending(){

currentFilter="pending";

displayTasks();

}



function showCompleted(){

currentFilter="completed";

displayTasks();

}