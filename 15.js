var flag = true;
function eventTarget() {
    var e = event.target;
       
    
    // e.disabled = true;*/
    
    if(flag == true){
        e.value = "x";
        //flag = false;
    }
    else{
        e.value = "0";
        //flag = true;
    }
    flag = !flag
}