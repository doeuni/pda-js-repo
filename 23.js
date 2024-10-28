let x = [3,6,9,20,-7,5];
for (let item of x){
    console.log(item * 10)
}

//심화 실제값에도 바꿀려면
for ( let idx in x) {
    x[idx] *= 10
}

console.log(x)