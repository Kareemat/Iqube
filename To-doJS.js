	 function newElement() {
    let li = document.createElement("li");
    li.className = "liClass";
    const inputValue = document.getElementById("item").value;
    const DateDetail = document.getElementById("date").value;
    const TimeDetail = document.getElementById("Time").value;
    let d =document.createTextNode(DateDetail);
    let t = document.createTextNode(inputValue   +"     " + DateDetail +"  " + TimeDetail);
    let details ={
      input:inputValue ,
      date:DateDetail,
      time:TimeDetail
    };
    localStorage.setItem('todo', JSON.stringify(details))
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li)
      console.log(details)
     }
    document.getElementById("item").value = "";
    document.getElementById("date").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    let editor = document.createElement("SPAN");
    let edit = document.createTextNode("\u270E");
    editor.className = "editt";

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

    function appendLeadingZeroes(n){
      if(n <= 9){
        return "0" + n;
      }
      return n
    }
    let now = new Date();
    let today = new Date(DateDetail);
    let currentDate =appendLeadingZeroes(today.getMonth()+1)+'/'+appendLeadingZeroes(today.getDate())+'/'+today.getFullYear();
    let InputDateTime = currentDate+' '+TimeDetail;
    let fullDate = new Date(InputDateTime);
    let taskList = document.getElementsByTagName("li");
    for (i = 0; i < taskList.length; i++) {
      if(fullDate > now){

      }
      else{
       taskList[i].style.setProperty("text-decoration", "line-through")
     }
   }
 }