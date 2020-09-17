function calculateNum(operator){
    var i = document.getElementById("num1");
    var j = document.getElementById("num2");
    
    if(operator == add){
        var r = Number(i.value) + Number(j.value);  
    }
    else if(operator == sub){
        var r = Number(i.value) - Number(j.value);
    }
    else if(operator == mul){
        var r = Number(i.value) * Number(j.value);
    }
    else if(operator == div){
        var r = Number(i.value) / Number(j.value);
    }
    else if(operator == mod){
        var r = Number(i.value) % Number(j.value);
    }
    else{
        var r = Number(i.value) ** Number(j.value);
    }
   /* else if(operator == pow){
        var r = Number(i.value) ** Number(j.value);
    }*/
    var r1 = document.getElementById("ans");
    r1.value = r;
     
}