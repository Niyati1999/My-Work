let timerId;
let i=0;
let j=0;
function timer(){
    timerId = setInterval(myfun,1000);
   // console.log(timerId);
}
function myfun(){
    var a = document.getElementById('txt_1');
    var b = document.getElementById('txt_2');
    i = i+1;
   
    if(i==60){
        j = j+1;
        i = 0;
    } 
    a.value = j;
    b.value = i;
}
function terminate(){
    clearInterval(timerId);
}