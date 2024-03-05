/*
Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/
var animalsnames = ["rabit", "goat", "camel", "deer"];
// printing only names
for (var _i = 0, animalsnames_1 = animalsnames; _i < animalsnames_1.length; _i++) {
    var i = animalsnames_1[_i];
    console.log(i);
}
for (var _a = 0, animalsnames_2 = animalsnames; _a < animalsnames_2.length; _a++) {
    var j = animalsnames_2[_a];
    console.log("".concat(j, " is a domestic animal"));
}
console.log("all these animals' ".concat(animalsnames[0], ", ").concat(animalsnames[1], ", ").concat(animalsnames[2], ", ").concat(animalsnames[3], " meat is Halal in islam"));
