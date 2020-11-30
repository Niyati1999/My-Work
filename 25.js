function factors(){
    var a = document.getElementById('num_1');
    var b = parseInt(a.value);
    var count=0;
    var x = '';
    //console.log(a);
    //console.log(a.value);
    for(i=1;i<=b;i++)
    {
        if(b%i==0)
        {
            x = x+i+",";
            count++;
        }
    }
    var y = document.getElementById('txt_1');
    y.value = x;
    var z = document.getElementById('num_2');
    z.value=count;
}
function prime(){
    var m = document.getElementById('num_1');
    var n = parseInt(m.value);
    var cnt = 0;
    for(i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            cnt++;
        }
    }
    var p = document.getElementById('txt_2');
    if(cnt==2){
        
        p.value="It is prime!";
    }
    else{
        
        p.value="It is not prime"
    }
}