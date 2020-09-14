function interest(){
    var p = document.getElementById("pr");
    var r = document.getElementById("roi");
    var t = document.getElementById("time");
    var i = (p.value*r.value*t.value)/100;
    var i1 = document.getElementById("int");
    i1.value = i;



   
    var a = Number(p.value)+i;
    var a1 = document.getElementById("num");
    a1.value = a;
}