function fastFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data * 2;
            console.log("fastFunction done", result);
            resolve(result)
        }, 1000)
    })
}

function slowFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data + 10;
            console.log("slowFunction done", result);
            resolve(result)
        }, 3000)
    })
}

// fastFunction -> slowFunction
// const initialData = 10
// fastFunction(initialData).then(data=>{
//     // resole
//     console.log("then1:", data);
//     return slowFunction(data)
// }).then(data=>{
//     console.log('then2',data)
// })



// const promise1 = fastFunction(initialData).then(data=>{
//     // resole
//     console.log("then1:", data);
//     return slowFunction(data)
// })

// promise1.then(data=>{
//     console.log('then2:', data)
// })


// slow -> fast -> fast -> slow 결과  출력
const initialData = 10
slowFunction(initialData).then(data => {
    console.log("then1:", data);
    return fastFunction(data);
}).then(data => {
    console.log('then2:', data);
    return fastFunction(data); 
}).then(data => {
    console.log('then3:', data);
    return slowFunction(data); 
}).then(data => {
    console.log('then4:', data);
});

//2초후에 실행하는 normalFunction <data를 2로 나누는>을 만들고,
//slow -> normal -> fast -> 결과 출력 (initialData:100)

function normalFunction(data){ //인자를 data로받고, 리턴을 프로미스객체인데 이 프로미스객체는 resolve, reject  함수의 인자 .
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data / 2;
            console.log("normalFunction done", result);
            resolve(result)
        }, 2000) //2초후 실행시키는 함수는 data를 2로 나눈 값을 resolve하는 함수다. 
    })
}
const initialData2 = 100;
const promise2 = slowFunction(initialData2).then(data=>{
    console.log("then1:", data);
    return normalFunction(data)
}).then(data => {
    console.log('then2:', data);
    return fastFunction(data); 
}).then(data => {
    console.log('결과 :', data);
});


// promise1.then(data=>{
//     console.log('then2:', data)
// })

// const initialData2 = 100
// SlowFunction(initialData2).then(data => {
//     console.log("then1:", data);
//     return normalFunction(data);
// }).then(data => {
//     console.log('then2:', data);
//     return FastFunction(data); 
// }).then(data => {
//     console.log('then4:', data);
// });