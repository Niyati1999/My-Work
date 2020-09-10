console.log('Hello console');
var total = 100;
console.log('total' +total);
console.log(12+12);
console.log(typeof total);
let isAvailable = true;
console.log(isAvailable);
console.log(typeof isAvailable);
const pi = 3.14;
//pi = 2409;
console.log(pi);
var totalSeconds = 140;
var min = parseInt(totalSeconds/60);
var sec = totalSeconds%60;
console.log('min ' +min);
console.log('sec ' +sec);
var result = prompt('Enter Name?','name');
console.log(result);
if(result == null){
    console.log('you pressed cancel');
}
else{
    console.log('ok selected');
}
var r = confirm('you are about to delete a record. Are you sure?');
console.log(r);
if(r == false){
    console.log('cancel selected');
}
else{
    console.log('Ok selected');
}