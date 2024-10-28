const KEY = "SAMPLE"
let johnProfile = {
    name: "John",
    sayHi : function() {
        console.log(this.name, ": 친구야 반갑다!");
    },
    [KEY] : "SampleValue",
};

johnProfile.sayHi();
console.log(johnProfile["sayHi"]);
console.log(johnProfile.SAMPLE);