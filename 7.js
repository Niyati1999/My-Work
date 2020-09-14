function fullName(){
    var f = document.getElementById("firstName");
    var r = document.getElementById("middleName");
    var q = document.getElementById("lastName")
    var fn = f.value+" " + r.value+" " + q.value;
    var fn1 = document.getElementById("fullName");
    fn1.value = fn;
    console.log(fn);
    

}
function clearName(){
    var cl = document.getElementById("fullName");
    cl.value = "";
}