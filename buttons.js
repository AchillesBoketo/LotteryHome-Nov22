function normalDraw () {
    console.log("button pressed");
    var target = document.getElementById("hero_specialDraw");
    target.classList.toggle("qa-hide");
}

function advancePlay () {
    console.log("button pressed");
    var target = document.getElementById("hero_specialDraw");
    target.classList.add("advance");    
    var before = document.getElementById("specialDraw-before");
    before.innerHTML = "play in advance"
   
}

function specialDraw () {
    console.log("button pressed");
    var target = document.getElementById("hero_specialDraw");
    target.classList.remove("advance");    
    var before = document.getElementById("specialDraw-before");
    before.innerHTML = "special draw"
}

