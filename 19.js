let obj1 = {
    name : "신윤수",
    city : "서울"
}

// let obj2 = {
//     //obj1, //변수하나만 썼음-> 현당하는 변수의이름을 키로만들어줌 
//     obj1:obj1, //과 똑같음
//     hometown : "ulsan",

// }

let obj2 = {
    ...obj1, //배열에있는 요소들을 풀어넣겠다. 
    hometown : "ulsan"
}

console.log(obj2);