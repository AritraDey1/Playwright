let person = {
    firstName: "Aritra",
    lastName: "Dey",
    age: 26,
    isStudent: false
};
console.log(person.firstName);
console.log(person["lastName"]); 

person.nationality = "Canadian";  // Adding a new property
person.age = 29;
console.log(person.nationality);


let student = {
  name: "Alice",
  grade: 12,
  subjects: {
    math: "A",
    science: "B"
  }
};
console.log(student.subjects.math); 