// typecasting

let code = 1234
let strCode = String(1234)
let parsedInt = parseInt(strCode)
let parsedFloat = parseFloat(strCode)

let condition = true
let isRunnig = condition.toString()

console.table({
    code: typeof(code),
    strCode: typeof(strCode),
    parsedInt:typeof(parsedInt),
    parsedFloat:typeof(parsedFloat),
    condition : typeof(condition),
    isRunnig : typeof(isRunnig)
})

