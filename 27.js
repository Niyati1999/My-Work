function factors(num){
    var count=0;
    for(i=1;i<=num;i++){
        if(num%i == 0){
            count++;
        }
    }
    return count;
}
function displayFactors(){
    var a = factors(10);
    console.log(a);
}
function isPrime(n){
    var b = factors(n);
    if(b==2){
        return true;
    }
    return false;
}
function checkPrime(){
    var c = isPrime(7);
    console.log(c);
     c = isPrime(8);
    console.log(c);
     c = isPrime(9);
    console.log(c);
     c = isPrime(10);
    console.log(c);
     c = isPrime(11);
    console.log(c);
    for(j=2;j<=20;j++){
         c = isPrime(j);
         if(c==true){

         console.log(c + '-' +j);
         }
    }
}
