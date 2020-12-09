let count=0;
function vowels(){
    var a = document.getElementById('txt_1');
    
    let s1 = a.value+'';
    let s = s1.toLowerCase();
    for(i=0;i<s.length;i++){
        if(s.charAt(i)=='a'){
            count = count + 1;
        }
        else if(s.charAt(i)=='e'){
            count = count + 1;
        }
        else if(s.charAt(i)=='i'){
            count = count + 1;
        }
        else if(s.charAt(i)=='o'){
            count = count + 1;
        }
        else if(s.charAt(i)=='u'){
            count = count + 1;
        }

    }
    var b = document.getElementById('txt_2');
    b.value = count; 
}