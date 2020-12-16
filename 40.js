function primeNumbers(){

var a = document.getElementById('txt_1');
var b = document.getElementById('txt_2');
var d = document.getElementById('txt_3');
var e = '';
let x = parseInt(a.value);
let y = parseInt(b.value);
for(j=x;j<=y;j++){
   
    var c = isPrime(j);
   
    if(c==true){
        console.log(j);
        e = e + j +',';
        d.value = e;
    }
    }
}
function isPrime(number){
    let cnt=0;
    for(i=1;i<=number;i++)
    {
        if(number%i==0)
        {
            cnt++;
        }
    }
    if(cnt==2){
        return true;
    }
    else{
        return false;
    }
    
}