async function name(params) {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url) //promise반환 비동기
    const data = await res.json();
    return data;

    console.log(data);

}

객체가 나옴. 이걸 return result;