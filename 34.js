function mapFunction(){
    let marks = [1,2,3,4];
    console.log(marks);
    let result = marks.map((value)=>value*value);
    console.log(result);
}
function getSquare(i){
    return i*i;
}
function myFunc(){
    let marks = [1,2,3,4];
    console.log(marks);
    let result = marks.map(getSquare);
    console.log(result);
}
function check(){
    let dataValues = [1,7,5,8,4];
    console.log(dataValues);
    let result = dataValues.map((dv)=>{
        if(dv%2==0){
            return true;
        }
        return false;
        
    });
    console.log(result);
}
function check1(){
    let dataValues = [1,7,5,8,4];
    console.log(dataValues);
    let result = dataValues.map((dv)=>(dv%2==0));
    console.log(result);
}