const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

async function fastFunction(data){
    await delay(1000);
    return data * 2;
}

async function slowFunction(data){
    await delay(3000);
    const result = data + 10;
    console.log("slowFunction Done");
    
    return result;
}

async function normalFunction(data){
    await delay(2000);
    return data / 2;
}
async function runTask(){
    const result = Promise.all( //a,b 작업따로 둘다끝나고 c로가서 작업. a,b,중 맥스 + c 만큼 걸림.
        //a b 중 둘중하나가실패했으면, 이 프로미스는 다 리젝트
        [slowFunction(10), normalFunction(20)]
    ).then(([result1, result2])=>{
        console.log("작업완료1", result1)
        console.log("작업완료2", result2)
    })
}
runTask()