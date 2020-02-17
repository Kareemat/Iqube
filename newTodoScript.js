document.getElementById('add').addEventListener('click', add);
show();
function retrieveTasks(){
	let tasks = [];
	let taskList = localStorage.getItem('todos');
	if(taskList !=null){
       tasks =JSON.parse(taskList);
	}
	return tasks;
};

function retrieveInputs(){
	let inputsData =[];
	let inputsList = localStorage.getItem('inputStorage');
	if(inputsList !=null){
       inputsData =JSON.parse(inputsList);
	}
	return inputsData;
};

function retrieveDates(){
	let datesData =[];
	let dateList = localStorage.getItem('dateStorage');
	if(dateList !=null){
       datesData =JSON.parse(dateList);
	}
	return datesData;
};

function retrieveTimes(){
	let timesData =[];
	let timeList = localStorage.getItem('timeStorage');
	if(timeList !=null){
       timesData =JSON.parse(timeList);
	}
	return timesData;
};

function add(){
	let inputValue = document.getElementById("item").value;
    let DateDetail = document.getElementById("date").value;
    let TimeDetail = document.getElementById("Time").value;
  if(inputValue && DateDetail && TimeDetail){
    let listValue = inputValue   +"     " + DateDetail +"  " + TimeDetail;
    
    let inputsData =retrieveInputs();
    inputsData.push(inputValue);
    localStorage.setItem('inputStorage', JSON.stringify(inputsData));

    let datesData =retrieveDates();
    datesData.push(DateDetail);
    localStorage.setItem('dateStorage', JSON.stringify(datesData));
    
    let timesData =retrieveTimes();
    timesData.push(TimeDetail);
    localStorage.setItem('timeStorage', JSON.stringify(timesData));

    let tasks = retrieveTasks();
    tasks.push(listValue);
    localStorage.setItem('todos', JSON.stringify(tasks));

      document.getElementById("item").value = "";
      document.getElementById("date").value = "";
      document.getElementById('add').innerHTML = "+";

 show();
 return false;
  }
  else{
  	alert("You must enter the required values!");
  }
};

function show(){
	updateTaskStatus();
	let tasks = retrieveTasks();
	let listDisplay ="";
	let i;
	   for(i =0; i< tasks.length; i++){
	   	listDisplay += '<li>'+ tasks[i] + '<button class="Edit" id="' + i  + '">Edit</button>'+'<button class="remove" id="' + i  + '">Del</button></li>';
        }
    document.getElementById('myUL').innerHTML = listDisplay;
      
    let removeButton = document.getElementsByClassName('remove');
    for(let i=0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', remove);
    };

    let editButton =document.getElementsByClassName('Edit');
    for(let i=0; i < editButton.length; i++) {
        editButton[i].addEventListener('click', edit);
    };
};

function remove(){
    let id = this.getAttribute('id');
    let tasks = retrieveTasks();
    let datesData =retrieveDates();
	let timesData =retrieveTimes();
	let inputsData =retrieveInputs();
    tasks.splice(id, 1);
    datesData.splice(id, 1);
    timesData.splice(id, 1);
    inputsData.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(tasks));
    localStorage.setItem('dateStorage', JSON.stringify(datesData));
    localStorage.setItem('timeStorage', JSON.stringify(timesData));
    localStorage.setItem('inputStorage', JSON.stringify(inputsData));
    show();
    return false;
};

function edit(){ 
	console.log('edit');
	let id = this.getAttribute('id');
	let tasks = retrieveTasks();
	let datesData =retrieveDates();
	let timesData =retrieveTimes();
	let inputsData =retrieveInputs();
	document.getElementById("item").value = inputsData[id];
	document.getElementById("date").value = datesData[id];
	document.getElementById("Time").value = timesData[id];
    document.getElementById("add").childNodes[0].nodeValue ="Save"
    tasks.splice(id, 1);
    datesData.splice(id, 1);
    timesData.splice(id, 1);
    inputsData.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(tasks));
    localStorage.setItem('dateStorage', JSON.stringify(datesData));
    localStorage.setItem('timeStorage', JSON.stringify(timesData));
    localStorage.setItem('inputStorage', JSON.stringify(inputsData));
    show();
    return false;
};

function appendLeadingZeroes(n){ 
      if(n <= 9){
        return "0" + n;
      }
      return n;
};

function updateTaskStatus(){
	let datesData =retrieveDates();
	let timesData =retrieveTimes();
	let tasks = retrieveTasks();
	for (i = 0; i < tasks.length; i++){
       let currentDate = new Date();
       let taskDate = new Date(datesData[i]);
       let taskFullDate =appendLeadingZeroes(taskDate.getMonth()+1)+'/'+appendLeadingZeroes(taskDate.getDate())+'/'+taskDate.getFullYear();
	   let inputDateTime = taskFullDate+' '+timesData[i];
	   let fullTaskDetail = new Date(inputDateTime);
	  if(currentDate > fullTaskDetail){
	    tasks[i] = tasks[i].strike();
	  }
	}
	localStorage.setItem('todos', JSON.stringify(tasks));
};
