// normalFunction(2초 후 2로 나누는)을 async function 정의
// fast -> noraml -> slow -> fast 결과 출력

const delay = ms => new Promise(resolve=>{
    setTimeout(resolve, ms) 
 })
 
 async function normalFunction(data) {
    await delay(2000);
    return data / 2;
    
    
} 
async function fastFunction(data) {
    await delay(1000);
    return data * 2;
    
} 
async function slowFunction(data) {
    await delay(3000);
    const result = data + 10 ;
    console.log("slowFunction Done");
    return result;
    
}

async function runTask() {//호출하면 프로미스객체가 반환됨 얘자체가 프로미스객체다. 반화난느 값이 프로미스객체다. 
    let result = await fastFunction(10); //await는 반드시 async안에서만 쓸 수있따.프로미스작업이 끝날대까지 기다리겟다.
    console.log("result1", result)
    result = await normalFunction(result);
    console.log("작업완료", result);

    result = await slowFunction(result);
    console.log("작업완료", result);

    result = await fastFunction(result);
    console.log("작업완료", result);

//async function이 들어가야 await 로 쓰기 편해지니까
// 메인함수를 이런식으로 ㅈ가성하거나 ()=> 이렇게하고runTask()로호출하면되는데 얘를 await
//로 한다거나. 메인함수구나라ㅗㄱ 이해

}

const result = runTask() //이거 호출하면 반환이 프로미스객체이다. 
console.log("runTask return", result);//Promise { <pending> }


