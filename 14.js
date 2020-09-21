function Enter(){
    console.log("Hello");
    var element = event.target;
    console.log(element);
    console.log(element.id);
    element.value = "yay";
    console.log(element.value);
    console.log(element.innerText);
}