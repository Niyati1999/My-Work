
function fun_1(){
    var r = prompt("change elements of h1","type something");
    console.log(r);
    if(r==null){
        
    }
    else{
        //document.getElementById("1").innerHTML = r;
        var h1 = document.getElementById("1");
        h1.innerHTML = r;
        h1.style.backgroundColor = "yellow";
    }
    
}
function fun_2(){
    var r = prompt("change elements of h2","type something");
    document.getElementById("2").innerHTML = r;

}
function fun_3(){
    var r = prompt("chnage elements of h3","type something");
    document.getElementById("3").innerHTML = r;

}
