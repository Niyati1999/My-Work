function askQuestion(){
    var a = confirm("Would you like to give party?");
    while(a==false){
         a = confirm("Would you like to give party?");
    }
    alert("Thank you!!");
}