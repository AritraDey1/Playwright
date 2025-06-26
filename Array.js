let array = ["Red", "Blue", "White"];

//Traditional
for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}


//Modern
for(let i of array){
    console.log(i);
}