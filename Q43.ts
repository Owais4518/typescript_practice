/*
Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/


let magicianNames2 = ["Afzal", "Zafar", "Umair", "Zahid"];

// making a copy of array
let magicianNamescopy = [...magicianNames2];

function show_magicians(greet: string){
    let withGreetings = "";


    for(let item of magicianNamescopy){
      withGreetings += `${greet} ${item}\n`; 
    }
    return withGreetings;
};

let mygreetings = show_magicians("Hello");
let makeArray = mygreetings.split('\n');
console.log(makeArray);

// orignal array
console.log(magicianNames2);