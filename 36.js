let timerId;
function setTime(){
    setTimeout(myfun,1000);
}
function myfun(){
    var a = document.getElementById('txt_1');
    let date = new Date();
    a.value = date;
}
function Interval(){
    timerId = setInterval(myfun2,2000);
    console.log(timerId);
}
function myfun2(){
    var a = document.getElementById('txt_2');
    let date = new Date();
    a.value = date;
}
function terminate(){
    clearInterval(timerId);
}