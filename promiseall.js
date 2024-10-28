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
    const result = Promise.all(
        [slowFunction(10), normalFunction(20)]
    ).then(([result1, result2])=>{
        console.log("작업완료1", result1)
        console.log("작업완료2", result2)
    })
    
}

async function runTask(){
    const [result1, result2] = await Promise.all(
        [slowFunction(10), normalFunction(20)]
    )
    console.log(result1, result2);
}

runTask()