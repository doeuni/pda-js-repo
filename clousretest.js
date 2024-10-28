function createIncrementer(start, step) {
    let result   = start;
    function inner(){//INNER(STEP) 입력하는경우살슈1 => 인자를 받기를 기대하는거. 이너안에 있는 스텝. 지역변수,전역 개념. 실수2.
        result += step;
        return result;
    }
    return inner;//실수2. inner()를 호출하는경우. ㅇ정답은 하ㄴㅁ수의리턴타입이 이너함수의 실수는 함수리턴타입이 이너함수를 호출한 리턴값. incbyone은 값이나오겟ㅈ.당연히호출안대겟죠

}

const incByOne = createIncrementer(5,1);
console.log(incByOne());//inxnuone은 리턴타입이 함수다 뒤에 괄호륿 ㅜㅌ여서홍출한다. -> 함수다. 콜러블한 객체 함수의인자가 빈값. 결국 리턴값을 ㅎ마수를
//반환해야한다는건데 funtion inner9)라고하겟다. 
console.log(incByOne());

const incByOne = createIncrementer(10,10);

