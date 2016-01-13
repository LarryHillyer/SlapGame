var health = 100;
var healthElem = document.getElementById("health");

function slap() {
    health--;   
    /*var num = health.toString();
    alert("Your fitness level is: "+ num);*/
}
function update() {
    healthElem.innerHTML = health.toString();
} 
update();  