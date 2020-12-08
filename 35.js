function fun(){
    let date = new Date();
    var currentDate = document.getElementById('txt_1');
    currentDate.value = date;
    var a = document.getElementById('txt_2');
    a.value = date.getDate();
    var b = document.getElementById('txt_3');
    b.value = date.getMonth()+1;
    var c = document.getElementById('txt_4');
    c.value = date.getFullYear();
    var d = document.getElementById('txt_5');
    d.value = date.getHours();
    var e = document.getElementById('txt_6');
    e.value = date.getMinutes();
    var f = document.getElementById('txt_7');
    f.value = date.getSeconds();
    var g = document.getElementById('txt_8');
    g.value = date.getMilliseconds();
    var h = document.getElementById('txt_9');
    h.value = date.getTime();
    var i = document.getElementById('txt_10');
    i.value = date.getDay();
    var j = document.getElementById('txt_11');
    j.value = date.toLocaleString();
    var k = document.getElementById('txt_12');
    k.value = date.toLocaleDateString();
    var l = document.getElementById('txt_13');
    l.value = date.toLocaleTimeString();

}