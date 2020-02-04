  $(document).ready(function() {
      let listArray = JSON.parse(localStorage.getItem('todos')) 
      if(listArray){
       for(i =0; i <listArray.length; i++){
          let list=document.createElement("li"); 
           let valuez =listArray[i]
           let valuezValue =document.createTextNode(valuez.input +" "+ valuez.date +" "+ valuez.time)
           list.appendChild(valuezValue);
           let span = document.createElement("SPAN");
           let txt = document.createTextNode("\u00D7")
           span.className = "close";
           let editor = document.createElement("SPAN");
           let edit = document.createTextNode("\u270E");
           editor.className = "editt";
           editor.appendChild(edit);
           span.appendChild(txt);
           list.appendChild(editor)
           list.appendChild(span);
           document.getElementById("myUL").appendChild(list)
       };
      }
  })


   
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7")
    span.className = "close";
    let editor = document.createElement("SPAN");
    let edit = document.createTextNode("\u270E");
    editor.className = "editt";

   function addNewElement(){
     const inputValue = document.getElementById("item").value;
    const DateDetail = document.getElementById("date").value;
    const TimeDetail = document.getElementById("Time").value;
    let listValue = document.createTextNode(inputValue   +"     " + DateDetail +"  " + TimeDetail);
    let details ={
      input:inputValue ,
      date:DateDetail,
      time:TimeDetail
    };
    //to put the values in local Storage
    let extractArray =JSON.parse(localStorage.getItem('todos'))
    if(!extractArray){
        let inputArray =[];
        inputArray.push(details);
        localStorage.setItem('todos', JSON.stringify(inputArray))

     }
     else{
        extractArray.push(details);
        localStorage.setItem('todos', JSON.stringify(extractArray))
     }
     //to move input values to the list in the container
    let li = document.createElement("li");
    li.className = "liClass";
    li.appendChild(listValue);
    if (inputValue === '') {
      alert("You must write something!");
    } 
    else {
    document.getElementById("myUL").appendChild(li)
    document.getElementById("item").value = "";
    document.getElementById("date").value = "";
    }
    //to add delete and edit button to each list
    editor.appendChild(edit);
    span.appendChild(txt);
    li.appendChild(editor)
    li.appendChild(span);

    const close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let Task = this.parentElement;
        Task.style.display = "none";
      }
    }
     let list = document.querySelector('ul');
     let editList = document.querySelector('.editt');
      editList.onclick = function() {
        //let list = $(this).closest("li")
        list.contentEditable = true;
      }
    function appendLeadingZeroes(n){
      if(n <= 9){
        return "0" + n;
      }
      return n
    }
    let now = new Date();
    let today = new Date(DateDetail);
    let currentDate =appendLeadingZeroes(today.getMonth()+1)+'/'+appendLeadingZeroes(today.getDate())+'/'+today.getFullYear();
    let inputDateTime = currentDate+' '+TimeDetail;
    let fullDate = new Date(inputDateTime);
    let taskList = document.getElementsByTagName("li");
    for (i = 0; i < taskList.length; i++) {
      if(fullDate > now){
        taskList[i].style.setProperty("text-decoration", "none")
      }
      else{
       taskList[i].style.setProperty("text-decoration", "line-through")
     }
   }
 }
