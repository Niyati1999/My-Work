function selection(){
    var i = document.getElementById("1");
    var j = document.getElementById("2");
    console.log(i.checked);
    var a = document.getElementById("selected");
    if(i.checked){
        a.value = "yes";
    }
    else if(j.checked){
        a.value = "No";
    }
    else{
        a.value = "None Selected";
    }
}