function outer() {// counter안에서 countsms wldurqutn지역변수다. 그래서밖에서접근 ㄴ. 
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter()); 

//qustn변수의스코프는 