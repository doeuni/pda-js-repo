let jsonData  = '{"key"}'

try {
    const data = JSON.parse(jsonData);
    console.log(data);
    console.log(data.key);
} catch (err){
    if (err instanceof SyntaxError){
        console.log('this is sys')
    } else if ( err instanceof RangeError)
        console.log("RangeErr")
}