/*
Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var usernames2 = ["Ali", "Madad", "Fayaz", "Admin", "Ayaz", "Tariq"];
// to remove all members
// usernames2 = [];
// console.log(usernames2);
if (usernames2.length > 0) {
    for (var i = 0; i < usernames2.length; i++) {
        if (usernames2[i] == "Admin") {
            console.log("\n Hello ".concat(usernames2[i], " Would you like to see a status report?\n "));
        }
        else {
            console.log("Hello ".concat(usernames2[i], " thankyou for loging in again!"));
        }
    }
}
else {
    console.log("we need to find some users!");
}
