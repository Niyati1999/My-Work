function choice(){
    var i = document.getElementById("1");
    var r = document.getElementById("output");
    if(i.checked){
        r.value = "yes selected";
    }
    else{
        r.value = "no selected";
    }
}