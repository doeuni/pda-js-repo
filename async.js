const delay = ms => new Promise(resolve=>{
   setTimeout(resolve, ms) 
})

// function fastFunction(data){ //리턴값은 프로미스객체다. 
//     return new Promise((resolve, reject)=> {
//         setTimeout(function(){
//             const result = data *2;
//             console.log("fastFunction done", result);
//             resolve(result)
//         }, 1000)
//     })
// }

async function fastFunction(data) {
    await delay(1000);
    return data * 2;
    
} //실행하면 위랑 똑같다. 

async function slowFunction(data) {
    await delay(3000);
    const result = data + 10 ;
    console.log("slowFunction Done");
    return result;
    
}
//async 호출하면 프로미스객체가 반환된다. 어웨이트로 반환되는 놈들은 프롬스객체에서 리졸브된결과이다. 
// 어싱크 어웨트 펑션과 프로밋객체는 사실상같다. await뒤에 호출할때도promise객체 놓을수있고
//다른결과를 놓을 숭 ㅣㅆ쬬 마치 비동기적으로동작하는 코드들을 호ㅜ출할때도동기적으로제어하느것처럼
//작성할 수 있겟죠. 어싱크펑션의 호출리턴은 프로미스객체이다. 
async function runTask() {//호출하면 프로미스객체가 반환됨 얘자체가 프로미스객체다. 반화난느 값이 프로미스객체다. 
    let result = await fastFunction(10); //await는 반드시 async안에서만 쓸 수있따.프로미스작업이 끝날대까지 기다리겟다.
    console.log("result1", result)
    result = await slowFunction(result);
    console.log("작업완료", result);
    
}

const result = runTask() //이거 호출하면 반환이 프로미스객체이다. 
console.log("runTask return", result);//Promise { <pending> }

