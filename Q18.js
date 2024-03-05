/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
var myPlaces = ["Karacha", "Sialkot", "Sukkar", "Hyderabad", "Lahore", "Peshawar"];
// console.log(myPlaces);
// making a copy of an array
var copyofarray = myPlaces.slice();
var sortedarray = copyofarray.sort();
// console.log(sortedarray);
// printing original array
// console.log(myPlaces);
// reversing orignal array
// first we have make a copy of orignal array
var copyofarray2 = myPlaces.slice();
var reverseOriarray = copyofarray2.reverse();
// console.log(reverseOriarray);
// prining orignal Array
// console.log(myPlaces);
// reverse the order of orignal array
var reverseOriarray2 = myPlaces.reverse();
// console.log(reverseOriarray2);
var againreverse = reverseOriarray2.reverse();
// console.log(againreverse);  //same as orignal array
// sorting oringnal array
var sortOriarray = myPlaces.sort();
console.log(sortOriarray);
var reversesortedarray = sortOriarray.reverse();
console.log(reversesortedarray);
