// fastFunction data*2 (1초)
// slowFunction data+10 (3초)
// initialData가 주어졌을 때, fastFunction -> slowFunction 
// slowFunction(fastFunction(initialData))

function fastFunction(data, callbackFn){
    return setTimeout(()=>{
        const result = data * 2
        console.log("fast", result);
        callbackFn(result)
    }, 1000)
}
//성공했을 때 콜백이 호출되게 짬. 화살표 함수안에서 성공이냐 실패만있어도 
function slowFunction(data, callbackFn){
    return setTimeout(()=>{
        const result = data + 10;
        console.log("slow", result);
        callbackFn(result);
    }, 3000)
}

// // fastFunction -> slowFunction
// fastFunction(10, (data)=>{
//     const fastFunctionResult = data
//     slowFunction(fastFunctionResult, data=>{
//         const slowFunctionResult = data;
//         console.log("fast->slow", slowFunctionResult);
//     })
// })

//initialDate : 30
// data : fastFunction -> slowFunction -> slowFunction -> fastFunction을 한후
// console.log(data) 를 출력하세요. 
// fastFunction -> slowFunction

const initialData = 30 
fastFunction(initialData, (data)=>{
    const fastFunctionResult = data
    slowFunction(fastFunctionResult, data=>{
        const slowFunctionResult = data;
        console.log("fast->slow", slowFunctionResult);
        slowFunction(slowFunctionResult, data=>{
            const slowFunctionResult2 = data;
            console.log("slow->slow", slowFunctionResult2);
            fastFunction(slowFunctionResult2, data=>{
                const fastFunctionResult2 = data;
                console.log("slow -> fast", fastFunctionResult2);
                console.log(data)
            })
        })
    })
    

        
})


