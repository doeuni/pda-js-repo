function createGreeting(greetingPrefix) {
    return function(name){
        console.log(greetingPrefix+ ", " +name + "!");
        console.log(`${greetingPrefix},${name}!`)
    };
}

const greetHello = createGreeting("Hello");
const greetHi = createGreeting("Hi");

greetHello("Alice");
greetHi("Bob");