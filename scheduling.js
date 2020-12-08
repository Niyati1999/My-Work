let mm;
let dy;
let m1;
let d1;
function display(){
    let d = new Date();
    var dd = d.getDate();
    mm = d.getMonth()+1;
    var yyyy = d.getFullYear();
    dy = d.getDay();
    var input1 = document.getElementById('txt_1');
    d = dd + '/' + mm + '/' + yyyy;
    var result = month(mm);
    var res2 = day(dy);
 
    var input2 = document.getElementById('txt_2');
    var input3 = document.getElementById('txt_3');
   
   
    input1.value = d;
    input2.value = result;
    input3.value = res2;
    
    
    
}
function month(number){
    var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
   
    var m = parseInt(mm);
    var m1 = month[m-1];
    return m1;
   
}
function day(num){
    var day = ['Sunday','Monday','Tuesday','Wednessday','Thursday','Friday','Saturday'];
    var d1 = day[num];
    return d1;
}