/*
Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
// function make_shirt(size: number, label: string){
//     // return size + lable;
//     return `my shirt size is ${size} and label is ${label}`;
// }
// let myfun = make_shirt(36, "the sunny day");
// // how to print on console
// console.log(myfun);
var myfun = function (size, label) {
    return size + label;
};
console.log(myfun(36, " the cool day"));
