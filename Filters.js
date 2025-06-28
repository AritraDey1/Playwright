let numbers = [1,2,3,4,5];
let evenNumbers = numbers.filter(num=>num%2===0);
console.log(evenNumbers);

let tests = [{testcase: 'smoke', status: 'pass'}, {testcase: 'sanity', status: 'fail'}];
let filteredTest = tests.filter(r=> r.testcase === 'smoke');
console.log(filteredTest);