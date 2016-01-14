var health = 100;

var healthElem = document.getElementById("health");
var hits = 0;
var name = "RockinSockinMike";
var nameElem = document.getElementById("name");
var hitsElem = document.getElementById("hits");
var healthProgBarElem = document.getElementById("health-1")
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
    $('.progress-bar').css('width', health +'%').attr('aria-valuenow', health);
    healthProgBarElem.innerText = health.toString() + "%";
    
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
$('.progress-bar').css('width', health .toString()+'%').attr('aria-valuenow', health.toString());
update();  