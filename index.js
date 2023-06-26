const name = document.querySelector("bulb")
   
function blue(){
 document.getElementById("bulb").style.backgroundColor = "blue";
  document.body.style.backgroundColor = "rgba(68, 88, 177, 0.575)"
}
function red(){
 document.getElementById("bulb").style.backgroundColor = "red";
  document.body.style.backgroundColor = "darkred"
}
function green(){
 document.getElementById("bulb").style.backgroundColor = "green";
  document.body.style.backgroundColor = "darkgreen"
}
function purple(){
 document.getElementById("bulb").style.backgroundColor = "magenta";
  document.body.style.backgroundColor = "purple"
}
function off(){
 document.getElementById("bulb").style.backgroundColor = "gray";
 document.body.style.backgroundColor = "rgb(50, 50, 50)"
}
