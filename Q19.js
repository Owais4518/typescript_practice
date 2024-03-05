/*
Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/
var myfriend = ["Noman", "Waqar", "Dabir", "Yasir", "Zahid"];
console.log("I am inviting ".concat(myfriend.length, " number of friend to my dinner which are following\n"));
for (var i = 0; i < myfriend.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myfriend[i], " "));
}
