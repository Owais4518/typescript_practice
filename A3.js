/*
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var PersonName = "Owais Ahmed";
// lowercase
console.log(PersonName.toLowerCase());
//uppercase
console.log(PersonName.toUpperCase());
//tittlecase
var firstlatter = PersonName.charAt(0).toUpperCase();
var restlatters = PersonName.slice(1).toLowerCase();
var titlecase = firstlatter + restlatters;
console.log(titlecase);
