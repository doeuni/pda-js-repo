function fastFunction (data) (
    return new Promise ((resolve, reject) =>{
        setTimeout(function(){
            const result = data * 2;
            console.log("Fast Function done")
        })
    })
)