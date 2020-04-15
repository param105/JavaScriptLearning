/* Rules for variables
0) var, let, const
1) case sensitive
2) can start with letter and number or $ and _
3) var is old javascript use let most of the time as var is global scope and let is local scope
*/
const MAX_COUNT =  100;
var subject = "JavaScript" // this is global
let empName = "Parmeshar";
let empMarks = 100;
{  
    let subject = "js"
    console.table({name:empName,marks:empMarks,subject :subject})
}
console.table({name:empName,marks:empMarks,subject :subject})

const arr= [1,2,3,4,5,6,7,8]
arr.push(9)
console.log(arr)