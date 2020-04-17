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

// here subject will be global
console.table({name:empName,marks:empMarks,subject :subject})

{
    const arr= [1,2,3,false,"param",null]
    console.log(arr)
    
    console.log("type of array is - " + typeof(arr))
}
