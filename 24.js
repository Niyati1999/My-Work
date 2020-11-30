function print()
{
    var ele=document.getElementById('1');
    //ele.innerHTML="<B>Hello World!</B>";
    var k='';
    for(i=1;i<=10;i++)
    {
        //console.log(i);
        k = k+i+",";
        
        
    }
    ele.innerHTML=k;
}
function printVertical(){
    var ele2=document.getElementById('txtData');
    let m='';
    for(i=1;i<=10;i++)
    {
        m=m+i+"\n";
    }
    ele2.value=m;
}
function table(){
    var n=document.getElementById('num');
    var a=document.getElementById('txtdata2')
    let p='';
    let q='';
    let n1=parseInt(n.value);
    for(i=1;i<=10;i++){
        p=n1*i ;
       // console.log(n1 +"*" +i +"=" +p);
         q =q+ n1 +"*" +i +"=" +p +"\n";
         console.log(q);
        

    }
    a.value=q;
}