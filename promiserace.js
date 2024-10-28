const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

async function fastFunction(data){
    await delay(1000);
    return data * 2;
}

async function slowFunction(data){
    await delay(3000);
    const result = data + 10;
    
    return result;
}

async function normalFunction(data){
    await delay(2000);
    return data / 2;
}
async function runTask(){
    const result = Promise.race(
        [slowFunction(1000), normalFunction(10),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Request timeout')), 100))
        ]
    ).then(data=>{
        console.log("작업완료")
        console.log(data);
    }).catch(err=>{
        console.log("에러 발생");
        
    })
}


runTask()