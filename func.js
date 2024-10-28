function limitCalls(func, n){
    let count = 0;

    return function(){
        if ( count < n) {
            count++
            return func()
        }
    } 
    
}

const limitedHello = limitCalls(() => console.log("Hello"), 2);
limitedHello() ;
limitedHello() ;
limitedHello() ;