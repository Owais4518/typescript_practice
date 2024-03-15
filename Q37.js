/*
Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
// function make_shirt(size: string, label: string){
//     return size + label
// }
// let myfunction = make_shirt("large", " i love typescript");
// console.log(myfunction);
// // making large as default
// function make_shirt(label: string, size: string = "large"){
//     return size + label
// }
// let myfunction = make_shirt(" i love typescript");
// console.log(myfunction);
// // making medium as default
// function make_shirt(label: string, size: string = "medium"){
//      return size + label
// }
// let myfunction = make_shirt(" i love typescript");
// console.log(myfunction);
// // making medium as default
function make_shirt(label, size) {
    if (size === void 0) { size = "medium"; }
    return size + label;
}
var myfunction = make_shirt(" any size", "i love typescript");
console.log(myfunction);
