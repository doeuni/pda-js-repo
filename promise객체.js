function fastFunction (data) {
    return new Promise((resolve, reject)=> { //객체의 인자는 함수. 함수의인자는 2개 리졸브, 리젝트 실행결과는 데이타 곱하기 2. 
        setTimeout(function() {
            const result = data * 2;
            console.log('Fast function done', result)
            resolve(result);
        }, 1000)
    })
}

const initialData = 10


function slowFunction (data) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const result = data + 10;
            console.log("Slow function done", result)
            resolve(result); //return타입 프로미스 객체 
        }, 3000)
    })
}

function runTask (){
    return fastFunction(10)
    .then((data)=> {
        return slowFunction(data);
    }).then(data=>{
        console.log("작업완료");
    }).catch(err=> {
        console.error(err);
    })
}

runTask()

const promise1 = fastFunction(initialData).then(data=>{
    console.log("then1:", data);
    return slowFunction
})

//