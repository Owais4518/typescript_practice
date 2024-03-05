/*
Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var usernames = ["Ali", "Madad", "Fayaz", "Admin", "Ayaz", "Tariq"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == "Admin") {
        console.log("\n Hello ".concat(usernames[i], " Would you like to see a status report?\n "));
    }
    else {
        console.log("Hello ".concat(usernames[i], " thankyou for loging in again!"));
    }
}
