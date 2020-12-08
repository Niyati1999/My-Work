function stringDemo(){
    var a = document.getElementById('txt_1');
    let data = a.value+'';
    console.log(data.length);
    var b = data.charAt(1);
    console.log(b);
    let c = data.charAt(data.length-1);
    console.log(c);
    let d = data.toUpperCase();
    console.log(d);
    let e = data.toLowerCase();
    console.log(e);
    let f = data.indexOf("some");
    console.log(f);
    let g = data.lastIndexOf("some");
    console.log(g);
    let h = data.substring(0,2);
    console.log(h);
}