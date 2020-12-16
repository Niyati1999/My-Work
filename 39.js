var c=0;
 var position = -1;
function searchWord(){
    var s1 = document.getElementById('txt_1');
    let data = s1.value+'';
    var s3 = document.getElementById('txt_2');

   
    var s5 = document.getElementById('txt_3');

    var result = data.indexOf(s3.value+'',position+1);
    while(result!=-1){ 
       
        position = result;
        result = data.indexOf(s3.value+'',position+1);
        c = c+1;
       
    }
    s5.value = c;
   
}