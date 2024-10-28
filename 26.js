function fastFunction (err, data, done) {
    setTimeout(function(){
        done(undefined, data*2);
    },1000)
}

function slowFunction (err, data, done) {
    setTimeout(function(){
        done(undefined, data + 10);
    }, 3000)
}
function runTasks (callback) {
    fastFunction(undefined, 10, (err,data)=> {
        if (err) return callback(err);
        console.log("fastFunction", data);

        slowFunction(undefined, data, (err,data)=>{
            if(err) return callback(err);
            console.log("slowFunction", data);
        })
        })
}

runTasks(err => {
    console.error(err);
})