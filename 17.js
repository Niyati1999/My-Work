function student(){
    var i = document.getElementById("g_1");
    var j = document.getElementById("g_2");
    var a = document.getElementById("s_1");
    var b = document.getElementById("s_2");
    var s = document.getElementById("display");

    if(i.checked && a.checked){
        s.value = "Male and semester 7";
    }
    else if(i.checked && b.checked){
        s.value = "Male and semester 8";
    }
    else if(j.checked && a.checked){
        s.value = "Female and semester 7";
    }
    else if(j.checked && b.checked){
        s.value = "Female and semester 8";
    }
    else{
        s.value = "None Selected";
    }
}