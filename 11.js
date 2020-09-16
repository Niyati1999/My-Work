function addNum(){
    var i = document.getElementById("num1");
    var j = document.getElementById("num2");
    var r = Number(i.value) + Number(j.value);
    var r1 = document.getElementById("ans");
    r1.value = r;    
}
function subNum(){
    var i = document.getElementById("num1");
    var j = document.getElementById("num2");
    var r = Number(i.value) - Number(j.value);
    var r1 = document.getElementById("ans");
    r1.value = r;    
}
function mulNum(){
    var i = document.getElementById("num1");
    var j = document.getElementById("num2");
    var r = Number(i.value) * Number(j.value);
    var r1 = document.getElementById("ans");
    r1.value = r;    
}
function divNum(){
    var i = document.getElementById("num1");
    var j = document.getElementById("num2");
    var r = Number(i.value) / Number(j.value);
    var r1 = document.getElementById("ans");
    r1.value = r;    
}
function moduloNum(){
    var i = document.getElementById("num1");
    var j = document.getElementById("num2");
    var r = Number(i.value) % Number(j.value);
    var r1 = document.getElementById("ans");
    r1.value = r;    
}
function powNum(){
    var i = document.getElementById("num1");
    var j = document.getElementById("num2");
    var r = Number(i.value) ** Number(j.value);
    var r1 = document.getElementById("ans");
    r1.value = r;    
}