function Person() {
    this.age = 25;
    setTimeout(function() {
        this.age++;  // `this` refers to the global object, not `Person`
        console.log(this.age);  // Outputs NaN or undefined, not the expected 26
    }, 1000);
}

const person = new Person();


function Person2() {
    this.age = 25;
    setTimeout(() => {
        this.age++;  // `this` refers to the surrounding `Person` context
        console.log(this.age);  // Outputs 26 as expected
    }, 1000);
}

const person2 = new Person2();
