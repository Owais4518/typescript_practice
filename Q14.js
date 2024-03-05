/*
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var myfriends = ["Ali", "Tariq", "Murad", "Ayaz"];
// 1st method with loop
// for(let i = 0; i < myfriends.length; i++){
// console.log(`Mr. ${myfriends[i]}! you are invited to my dinner on monday\n`);
// }
// 2nd method using map()
myfriends.map(function (ib) {
    console.log("Mr. ".concat(ib, "! you are invited to my dinner on monday\n"));
});
