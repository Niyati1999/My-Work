var flag = true;
function game(button_no){
    var e = event.target;

    if(flag == true){
        e.value = "x";
    }
    else{
        e.value = "0";
    }
    flag = !flag;
    e.disabled = true;
}