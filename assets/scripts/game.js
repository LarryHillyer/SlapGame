var name = "RockinSockinMike";
var health = 100;
var hits = 0;

var nameElem = document.getElementById("name");
var healthElem = document.getElementById("health");
var hitsElem = document.getElementById("hits");

var healthProgBarElem = document.getElementById("health-1");
var hitsProgBarElem = document.getElementById("hits-1");

function slap() {
    health--; 
    hits++;
    update();  
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

function checkGameOver() {
    if (health <= 0) {
        alert("Game Over! ");
        hits = 0;
        health = 100;
        updateHelper();
    } 
}

function updateName() {
    nameElem.innerText = 'Name: ' + name;
}

function updateHealth () {
    healthElem.innerText = "Health: " + health.toString() + "%";
    $('.progress-bar-health').css('width', health +'%').attr('aria-valuenow', health);
    healthProgBarElem.innerText = health.toString() + "%";     
}

function updateHits() {
    hitsElem.innerText = "Hits: " + hits.toString();
    $('.progress-bar-hits').css('width', hits +'%').attr('aria-valuenow', hits);
    hitsProgBarElem.innerText = hits.toString();  
}

function updateHelper() {
    updateName();
    updateHealth();
    updateHits();
}

function update() {
    updateHelper();    
    checkGameOver();    
}
 
$('.progress-bar-health').css('width', health .toString()+'%').attr('aria-valuenow', health.toString());
$('.progress-bar-hits').css('width', hits +'%').attr('aria-valuenow', hits);
update();  