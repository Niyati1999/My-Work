function getNameButtonClick(){
    var firstname = document.getElementById("firstname");
    alert(firstname.value);
}
function setNameButtonClick(){
    var fn = document.getElementById("firstname");
    fn.value = "Niyati";
}
function clearName(){
    var cl = document.getElementById("firstname");
    cl.value = "";
    cl.focus();
}