let student = {
    firstName: 'Niyati',
    lastName: 'Salot',
    rollNo: 101,
    Semester: 8
}
let a,b,c,d;
function studentDetails(){
     a = document.getElementById('txt_1');
     b = document.getElementById('txt_2');
     c = document.getElementById('txt_3');
     d = document.getElementById('txt_4');
    a.value = student.firstName;
    b.value = student.lastName;
    c.value = student.rollNo;
    d.value = student.Semester;
    
}
function studentDetailscorrection(){
    var e = document.getElementById('txt_5');
    var f = document.getElementById('txt_6');
    var g = document.getElementById('txt_7');
    var h = document.getElementById('txt_8');
    a.value = e.value;
    b.value = f.value;
    c.value = g.value;
    d.value = h.value;
}