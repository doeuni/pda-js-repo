const min  = (num1, num2) => {
    if (num1 < num2){
        return num1
    }
    return num2
}

const result = min(10, -1)
console.log(result)

const min2 = (num1, num2) => {
    return num1 < num2 ? num1 : num2
}

const min2 = (num1, num2) => (num1 < num2 ? num1 : num2)
//라인 한줄이면(코드불럭 필요없으면) 중괄호와 return 생략가능 