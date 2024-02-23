
/*
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

const PersonName: string = "Owais Ahmed";

// lowercase
console.log(PersonName.toLowerCase());


//uppercase
console.log(PersonName.toUpperCase());


//tittlecase

let firstlatter: string = PersonName.charAt(0).toUpperCase();
let restlatters: string = PersonName.slice(1).toLowerCase();

let titlecase = firstlatter + restlatters;

console.log(titlecase);
