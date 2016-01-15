var name = "RockinSockinMike";
var health = 100;
var hits = 0;

var nameElem = document.getElementById("name");
var healthElem = document.getElementById("health");
var hitsElem = document.getElementById("hits");
var imageElem = document.getElementById("image");

var healthProgBarElem = document.getElementById("health-1");
var hitsProgBarElem = document.getElementById("hits-1");

var firstTime = true;

function slap() {
    player.health = player.health - 1*(1-player.addMods()); 
    player.hits++;
    update();  
}

function punch() {
    player.hits++;
    player.health = player.health - 5*(1 - player.addMods());
    update();
}

function kick() {
    player.hits++;
    player.health = player.health - 10*(1-player.addMods());
    update();
}

function checkGameOver() {
    if (player.health <= 0) {
        alert("Game Over! ");
        player.hits = 0;
        player.health = 100;
        updateHelper();
        document.getElementById("player-panel").classList.remove("panel-danger")
        
    } else if (player.health <= 10 && player.health > 0) {
        document.getElementById("player-panel").classList.add("panel-danger")
    } else {
        document.getElementById("player-panel").classList.remove("panel-danger")
    }
}

function updateName() {
    nameElem.innerText = 'Name: ' + player.name;
}

function updateHealth () {
    healthElem.innerText = "Health: " + player.health.toString() + "%";
    $('.progress-bar-health').css('width', player.health +'%').attr('aria-valuenow', player.health);
    healthProgBarElem.innerText = player.health.toString() + "%";     
}

function updateHits() {
    hitsElem.innerText = "Hits: " + player.hits.toString();
    $('.progress-bar-hits').css('width', player.hits +'%').attr('aria-valuenow', player.hits);
    hitsProgBarElem.innerText = player.hits.toString();  
}

function updateHelper() {
    updateName();
    updateHealth();
    updateHits();
}

function resetImage() {
    imageElem.src = "assets/img/Rcd6kLXc9.png";
}

function splatTimeDelay() {
    setTimeout(resetImage, [500]);
}

function update() {
    updateHelper();
    if (firstTime === false) {
    imageElem.src = "assets/img/Splat.jpg";
    splatTimeDelay();
    }
    firstTime = false;    
    checkGameOver();    
}

function Item(name, modifier, description) {
    this.name = name;
    this.modifer = modifier;
    this.description = description;
    this.draw = function() {
        
    }   
}

function Player(name, health, hits, items) {
    this.name=name;
    this.health = health;
    this.hits = hits;
    this.items = items;
    
    this.addMods = function () {
        var addMod1 = 0;
        for (var i in this.items) {
            addMod1 = addMod1 + this.items[i].modifer;      
        }
        return addMod1;
    }
    
    
}
var items = {shield:new Item("Shield",0.3,"This is an awesome shield!"),
            bodyArmor: new Item("Body Armor", 0.4, "This is what I use to rob banks"),
            helmet: new Item("Helmet", 0.25, "This is the best Helmet available")}
            
var player = new Player(name, health, hits, [items.helmet, items.bodyArmor]);
 
$('.progress-bar-health').css('width', player.health.toString()+'%').attr('aria-valuenow', player.health.toString());
$('.progress-bar-hits').css('width', player.hits +'%').attr('aria-valuenow', player.hits);
update(); 
