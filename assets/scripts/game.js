var health = 100;
var healthElem = document.getElementById("health");

function slap() {
    health--; 
    update();  
    /*var num = health.toString();
    alert("Your fitness level is: "+ num);*/
}
function update() {
    healthElem.innerText = health.toString();
} 

function punch() {
    update();
}
update();  