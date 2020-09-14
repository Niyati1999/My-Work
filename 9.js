function evenOdd(){
    var a = document.getElementById("num");
    var r = document.getElementById("res");
    if(a.value == 0){
        r.value = "It is Zero";
    }
    else if(a.value % 2 == 0){
        r.value = "It is Even";

    }
    else{
        r.value = "It is Odd";
    }
}