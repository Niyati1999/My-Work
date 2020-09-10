function getBodyContent(){
    console.log(document.head);
    console.log(document.body);
    console.log(document.title);
    console.log(document.URL);
    document.title = "we will do it";
    document.body.style.color="#009688";
    
}
function changeTitle(){
    var i = prompt("Enter Title");
    document.title = i;
}
function geth2Content(){
    var j = document.getElementById('first');
    console.log(j.innerHTML);
    console.log(j.innerText);
}