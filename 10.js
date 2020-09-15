function checkNum(){
    var i = document.getElementById("num");
    var r = document.getElementById("res");
    if(i.value == 0){
        r.value = "Zero";
    }
    else if(i.value < 0){
        r.value = "Negative";
    }
    else{
        r.value = "Positive";
    }
}