



//1번 
async function getUserByUsername(username) {
  
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i]["username"] === username) {
            userid = data[i]["id"];
            console.log(data[i])
            return data[i]["id"];
        }
      }
    });
}
const username = prompt("유저이름");

getUserByUsername(username)
//2


//🌟2번 여기부터
function getUserByUsername(username){
  return fetch('https://jsonplaceholder.typicode.com/users/')
  .then(resp=>{
      return resp.json()
  })
  .then(data=>{ //사용자 찾기
      for (let i=0; i<data.length; i++){
          if (data[i]["username"] === username){
              console.log(data[i]);
              return data[i]["id"];
          }
      }
      return null;
  });
}
//
function getUserPostByUserId(userid){
  return fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`).then(resp=>{ 
      return resp.json();
  }).then(data=>{
      console.log(data);
  });
}
const username = prompt('유저 이름은? ');
getUserByUsername(username).then(userId => {
  return getUserPostByUserId(userId); // 사용자 ID로 게시글 가져오기
}).catch(error => {
  console.error('Error:', error);
});
// 여기까지 🌟

//2번
function getUserPostByUserId(userId){
  return fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`)
  .then(response=>response.json())
  .then((response)=>{
      console.log(response);
      return response
  })
};

//하고 getUserPostByUserId(1) 하면나옴


//3번
function getUserInfoByUsername(username) {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i]["username"] === username) {
          userid = data[i]["id"];
          console.log(data[i])
          return data[i]["id"];
      }
    }
  })
  .then((id)=>{
  Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(resp=>{return resp.json();}).then(data=>{console.log(data);}),
              fetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`).then(res => res.json().then(res=>console.log(res))),
              fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`).then(res => res.json().then(res=>console.log(res)))
        ])
    })//tnstj순서랑상관없이 post가 감과동시에 commets도함꼐, todo도함꼐  
    //프로미스올은 동시에가고 쟤는 기다렸다가 또 요청보내고 기다리고 
    
};


