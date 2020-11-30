function displayMessage(){
    alert('Good Evening!');
}
function displayMessage1(messageContent){
    alert(messageContent);
}

function isPositive(num){
    if(num>0){
        return true;
    }
    else{
        return false;
    }
}
function checkPositive(){
    //let n = isPositive(7);
    let v1 = document.getElementById('txt_1');
    let n = isPositive(v1.value);
    console.log(n);
    displayMessage1(n);
}