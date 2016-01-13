var health = 100;

var healthElem = document.getElementById("health");
var hits = 0;
var name = "RockinSockinMike";
var nameElem = document.getElementById("name");
var hitsElem = document.getElementById("hits");
function slap() {
    health--; 
    hits++;
    update();  
    /*var num = health.toString();
    alert("Your fitness level is: "+ num);*/
}
function update() {
    healthElem.innerText = health.toString();
    nameElem.innerText = name;
    hitsElem.innerText = hits.toString();
    
} 

function punch() {
    hits++;
    health = health - 5;
    update();
}

function kick() {
    hits++;
    health = health - 10;
    update();
}
update();  