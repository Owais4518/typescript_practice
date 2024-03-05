/*
Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/

let myfriend: string [] = ["Noman", "Waqar", "Dabir", "Yasir", "Zahid"];

console.log(`I am inviting ${myfriend.length} number of friend to my dinner which are following\n`);

for(let i = 0; i< myfriend.length; i ++){
    console.log(`${i + 1}. ${myfriend[i]} `)
}