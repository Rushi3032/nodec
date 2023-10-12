const plus = (a , b) =>{
    console.log(a + b)
}
const min = (a , b) =>{
    console.log(a - b)
}
const mult = (a , b) =>{
    console.log(a * b)
}
const div = (a , b) =>{
    console.log(a / b)
}


// function plus(a,b){
//     console.log(a + b)
// }

module.exports={
    plus,
    minus:min,
    multiply:mult,
    division:div
};