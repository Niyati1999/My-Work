function fun_1(){
    var count=1;
    var b=0;
    var c='';
    var x = document.getElementById('txt_1');
    while(count<=5){
    var a = prompt("Enter Positive Values Only!");
   
    if(parseInt(a)>0){
    count++;
    b=b+parseInt(a);
    c = c+a +",";
    }
    }
    x.value = c;
    alert("sum=" +b);
}