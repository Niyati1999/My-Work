function platformSelection(){
    var i = document.getElementById("1");
    var j = document.getElementById("2");
    var k = document.getElementById("3");
    var r = document.getElementById("output");
    var s = "";
    if(i.checked == true){
        s="Mobile";
    }
    if(j.checked == true){
        s+= ", Web";
    }
    if(k.checked == true){
        s+= ", Desktop";
    }
    r.value = s;
}
function clearSelection(){
    var r = document.getElementById("output");
    var x = document.getElementById("1");
    var y = document.getElementById("2");
    var z = document.getElementById("3");
    x.checked = false;
    y.checked = false;
    z.checked = false;
    r.value = "";
}