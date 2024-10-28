ask (
    function () {
        ()=> confirm("동의하십니까?"),
    },
    alert("동의")        
    function () {
        alert("거부")
        
    }

)

function ask ( agreeFn, onAgreeFn, onDisAgreeFn) {
    agreeFn //데이터타입: 함수
    return agreeFn() ?  onAgreeFn() : onDisAgreeFn()//인자 전달 안하고 있다. 위에보면 인자없어서 굳이 ㄴㄴ / 호출결과가 True면 두번째 인자를 실행할거다. false면 세번째인 onDisagreeFn을 실행
}

//호출 안하면 함수자체임. 호출되지않으면 함수자체라서 . 
//호출이안되면 실행이안된단거고, 함수를 호출시켜줘야함. 데이터타입을 인자로받으면 함수를 호출할 수 있는겁니다.
// 이호출은 어디서시켜요? ask함수안에서 , ask 안에서 인자안주기로 결정했기떄문에 인자안준거다.  
// 만약에 내가 ask 펑션안에서 인자를 전달해준다고 생각해보면 
//그러면 ask호출할 떄 인자를 하나를 받아야함. 받길 기대하고 만든 함수다.  