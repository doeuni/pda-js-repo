const readline = require('readline')
//임포트 하는 방식이 크게 1. import,from(es module) 2. require (common.js방식)
const rl = readline.createInterface({
    input : process.stdin,
    outpu

});

rl.on('line', function(line){ //on : 이벤트 처리할 떄 쓰는 함수 다양한 프로그래밍 패러다임을 지원. 절차 , 객체, 함수형, 함수형프로그램으 특징은 
    // 함수의 인자로 함수를 받는다. on이라는 함수에서 첫번쨰인자는 스트링을 받앗는데 두번쨰는 ㅎ마숩니다. line이란 이벤트 발생햇을 떄 이 함수를 실행시켜라
    // 함수형프로그램이 왜 인기냐면 요런처리가 잇을수잇다. 함수사용이유= 재사용. 분산처리하고싶으면 . 근데 뭘처리할진 안정햇으면, 
    //필연적으로 함수인자로 함수를 줄수밖에없다. 
    console.log(line)
    rl.close()
})