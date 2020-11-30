function arrayDemo(){
    let products = ['Detol','cinthol','Hamam','Dove'];
    console.log(products);
    console.log("Length = " +products.length);
    console.log("Element at first position= " +products[0]);
    console.log("Element at last position= " +products[products.length-1]);
    var a = products.push('pears');
    console.log(a);
    console.log(products);

}
function arrayDemo2(){
    let products = ['Detol','cinthol','Hamam','Dove']; 
    for(i=0;i<products.length;i++)
    {
            alert(products[i]);
    }
}
function search(){
    let products = ['Detol','cinthol','Hamam','Dove']; 
    var a = prompt('Enter a word to search');
    var b = products.indexOf(a);
    if(b>-1){
        alert('found at ' +b);
    }
    else{
        alert('Not Found');
    }
}
function shift(){
    let products = ['Detol','cinthol','Hamam','Dove']; 
    var a = products.shift();
    console.log(a);
    alert(a);
}
function splice1(){
    let products = ['Detol','cinthol','Hamam','Dove']; 
    console.log(products);
    var a = products.splice(1,2);
    console.log(a);
    console.log(products);
}
function slice1(){
    let products = ['Detol','cinthol','Hamam','Dove']; 
    var a = products.slice();
    console.log(products);
    console.log(a);
    var b = products.slice(1,3);
    console.log(b);
}
function sortArray(){
    let products = ['Detol','cinthol','Hamam','Dove']; 
    var a = products.sort();
    console.log(a);
    var b = products.reverse();
    console.log(b);
}
function checkArray(){
    let products = ['Detol','cinthol','Hamam','Dove']; 
    let i = 0;
    let result = Array.isArray(products);
    console.log('products is array =' +result);
    result = Array.isArray(i);
    console.log('i is Array = ' +result);
}
function splitString(){
    let names = "Detol,Cinthol,Dove,Lifeboy";
    let arr = names.split(',');
    console.log(arr);
    alert(arr);
    let newstr = arr.join(';');
    console.log(newstr);    
}
function filterArray(){
    let products = ['Detol','Cinthol','Hamam','Dove'];
    console.log('initital product array');
    console.log(products);
    var result = products.filter((data)=>data.length>5);
    console.log("Result after filter: " +result);
}
function filterArray1(){
    let products = ['Detol','Cinthol','Hamam','Dove'];
    console.log('initital product array');
    console.log(products);
    var result = products.filter(filterValue);
    console.log("Result after filter: " +result);
}
function filterValue(value){
    console.log(value);
    return(value.length==5);
}