//REQUEST FOR LAGOS TIME
let request1 = new XMLHttpRequest()
request1.open('GET', 'http://worldtimeapi.org/api/timezone/Africa/Lagos', true)
request1.onload = function(){
  let data = JSON.parse(this.response)
  if (request1.status >= 200 && request1.status < 400 && this.readyState ==4){
      let datetime =data.datetime;
      let time = datetime.slice(11,16);
      const h3 = document.createElement('h3')
      h3.textContent = time
      let lagosTime = document.getElementById('innerLagos')
      lagosTime.appendChild(h3)
}
  else{
	const errorMessage =document.createElement('marquee')
    errorMessage.textContent = `Oh No, it's not working!`
    app.appendChild(errorMessage)
  }
}  
request1.send()
//REQUEST FOR LONDON TIME
let request2 = new XMLHttpRequest()
request2.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/London', true)
request2.onload = function(){
  let data = JSON.parse(this.response)
  if (request2.status >= 200 && request2.status < 400 && this.readyState ==4){
      let datetime =data.datetime;
      let time = datetime.slice(11,16);
      const h3 = document.createElement('h3')
      h3.textContent = time
      let londonTime = document.getElementById('londonText')
      londonTime.appendChild(h3)
}
else{
	const errorMessage =document.createElement('marquee')
    errorMessage.textContent = `Oh No, it's not working!`
    body.appendChild(errorMessage)
}
}  
request2.send()
//REQUEST FOR TEXAS TIME
let request3 = new XMLHttpRequest()
request3.open('GET', 'http://worldtimeapi.org/api/timezone/America/Chicago', true)
request3.onload = function(){
  let data = JSON.parse(this.response)
  if (request3.status >= 200 && request3.status < 400 && this.readyState ==4){
      let datetime =data.datetime;
      let time = datetime.slice(11,16);
      const h3 = document.createElement('h3')
      h3.textContent = time
      let texasTime = document.getElementById('texasText')
      texasTime.appendChild(h3)
}
else{
	const errorMessage =document.createElement('marquee')
    errorMessage.textContent = `Oh No, it's not working!`
    body.appendChild(errorMessage)
}
}  
request3.send()
// REQUEST FOR PARIS TIME
let request4 = new XMLHttpRequest()
request4.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/Paris', true)
request4.onload = function(){
  let data = JSON.parse(this.response)
  if (request4.status >= 200 && request4.status < 400 && this.readyState ==4){
      let datetime =data.datetime;
      let time = datetime.slice(11,16);
      const h3 = document.createElement('h3')
      h3.textContent = time
      let parisTime = document.getElementById('parisText')
      parisTime.appendChild(h3)
}
else{
	const errorMessage =document.createElement('marquee')
    errorMessage.textContent = `Oh No, it's not working!`
    body.appendChild(errorMessage)
}
}  
request4.send()