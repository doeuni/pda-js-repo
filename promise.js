new Promise((resolve, reject)=>{ //데이터한개 받고있다. 함수.  함수의 인자는 두개받고있다. 첫번쨰는 리졸브 두번쨰는리젝트 
    if (1) {
        const value =10
        resolve(value);
    } else {
        const error = new Error("에러 발생")
        reject(error);
    }
}). then(data => {
    console.log(data)
}).catch(err=>{
    console.error(err);
}).finally(()=>{
    console.log("종료")
}) 

// 아니요 . 일단은 . 콜백펑션의문제점은 가독성. 이 안좋다. 