function studentInfo(){
    var i = document.getElementById("g_1");
    var j = document.getElementById("g_2");
    var a = document.getElementById("s_1");
    var b = document.getElementById("s_2");
    var c = document.getElementById("s_3");
    var x = document.getElementById("t_1");
    var y = document.getElementById("t_2");
    var z = document.getElementById("t_3");
    var s = document.getElementById("result");
    var r;
    if(i.checked){
        r = "Male";
    }
    else if(j.checked){
        r = "Female";
    }

    if(a.checked){
        r = r + "-semester 6";
    }
    else if(b.checked){
        r = r + "-semester 7";
    }
    else if(c.checked){
        r = r + "-semester 8";
    }

    if(x.checked){
        r = r + " technology selected-python";
    }
    else if(y.checked){
        r = r + " technology selected -.net";
    }
    else if(z.checked){
        r = r + " technology selected - Java";
    }
    s.value = r;
}